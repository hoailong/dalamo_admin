import productAPI from "./api";
import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const initialProduct = {
  product: [],
  isLoading: false,
  isProcessing: false,
  isCompleted: false,
};

const product = createSlice({
  name: "product",
  initialState: initialProduct,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsProcessing: (state, action) => {
      if (action.payload === true) state.isCompleted = false;
      state.isProcessing = action.payload;
    },
    setIsCompleted: (state, action) => {
      state.isCompleted = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    addProduct: (state, action) => {
      state.isCompleted = true;
      state.product.push(action.payload);
    },
    editProduct: (state, action) => {
      state.isCompleted = true;
      state.product = state.product.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    },
    removeProduct: (state, action) => {
      state.isCompleted = true;
      state.product = state.product.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

const { reducer, actions } = product;

export const {
  setIsLoading,
  setIsCompleted,
  setIsProcessing,
  setProduct,
  addProduct,
  editProduct,
  removeProduct,
} = actions;

export const fetchProduct = () => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const data = await productAPI.getAll();
      dispatch(setProduct(data));
      dispatch(setIsLoading(false));
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      dispatch(setIsProcessing(false));
    }
  };
};
export const createProduct = (product) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await productAPI.create(product);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch(addProduct(data));
        toast.success("Thêm mới thành công!");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      dispatch(setIsProcessing(false));
    }
  };
};
export const updateProduct = (id, product) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await productAPI.update(id, product);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch(editProduct(data));
        toast.success("Cập nhật thành công!");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      dispatch(setIsProcessing(false));
    }
  };
};
export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await productAPI.delete(id);
      dispatch(removeProduct(data));
      toast.success("Xóa thành công!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      dispatch(setIsProcessing(false));
    }
  };
};
export default reducer;
