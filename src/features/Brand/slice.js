import brandAPI from "./api";
import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const initialBrand = {
  brand: [],
  isLoading: false,
  isProcessing: false,
  isCompleted: false,
};

const brand = createSlice({
  name: "brand",
  initialState: initialBrand,
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
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    addBrand: (state, action) => {
      state.isCompleted = true;
      state.brand.push(action.payload);
    },
    editBrand: (state, action) => {
      state.isCompleted = true;
      state.brand = state.brand.map((brand) =>
        brand.id === action.payload.id ? action.payload : brand
      );
    },
    removeBrand: (state, action) => {
      state.isCompleted = true;
      state.brand = state.brand.filter(
        (brand) => brand.id !== action.payload.id
      );
    },
  },
});

const { reducer, actions } = brand;

export const {
  setIsLoading,
  setIsCompleted,
  setIsProcessing,
  setBrand,
  addBrand,
  editBrand,
  removeBrand,
} = actions;

export const fetchBrand = () => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const data = await brandAPI.getAll();
      dispatch(setBrand(data));
      dispatch(setIsLoading(false));
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      dispatch(setIsProcessing(false));
    }
  };
};
export const createBrand = (brand) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await brandAPI.create(brand);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch(addBrand(data));
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
export const updateBrand = (brand) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await brandAPI.update(brand);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch(editBrand(data));
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
export const deleteBrand = (id) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await brandAPI.delete(id);
      dispatch(removeBrand(data));
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
