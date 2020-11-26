import categoryAPI from "./api";
import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const initialCategory = {
  category: [],
  isLoading: false,
  isProcessing: false,
  isCompleted: false,
};

const category = createSlice({
  name: "category",
  initialState: initialCategory,
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
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    addCategory: (state, action) => {
      state.isCompleted = true;
      state.category.push(action.payload);
    },
    editCategory: (state, action) => {
      state.isCompleted = true;
      state.category = state.category.map((category) =>
        category.id === action.payload.id ? action.payload : category
      );
    },
    removeCategory: (state, action) => {
      state.isCompleted = true;
      state.category = state.category.filter(
        (category) => category.id !== action.payload.id
      );
    },
  },
});

const { reducer, actions } = category;

export const {
  setIsLoading,
  setIsCompleted,
  setIsProcessing,
  setCategory,
  addCategory,
  editCategory,
  removeCategory,
} = actions;

export const fetchCategory = () => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const data = await categoryAPI.getAll();
      dispatch(setCategory(data));
      dispatch(setIsLoading(false));
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      dispatch(setIsProcessing(false));
    }
  };
};
export const createCategory = (category) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await categoryAPI.create(category);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch(addCategory(data));
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
export const updateCategory = (category) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await categoryAPI.update(category);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch(editCategory(data));
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
export const deleteCategory = (id) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await categoryAPI.delete(id);
      dispatch(removeCategory(data));
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
