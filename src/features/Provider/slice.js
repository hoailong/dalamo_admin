import providerAPI from "./api";
import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const initialProvider = {
  provider: [],
  isLoading: false,
  isProcessing: false,
  isCompleted: false,
};

const provider = createSlice({
  name: "provider",
  initialState: initialProvider,
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
    setProvider: (state, action) => {
      state.provider = action.payload;
    },
    addProvider: (state, action) => {
      state.isCompleted = true;
      state.provider.push(action.payload);
    },
    editProvider: (state, action) => {
      state.isCompleted = true;
      state.provider = state.provider.map((provider) =>
        provider.id === action.payload.id ? action.payload : provider
      );
    },
    removeProvider: (state, action) => {
      state.isCompleted = true;
      state.provider = state.provider.filter(
        (provider) => provider.id !== action.payload.id
      );
    },
  },
});

const { reducer, actions } = provider;

export const {
  setIsLoading,
  setIsCompleted,
  setIsProcessing,
  setProvider,
  addProvider,
  editProvider,
  removeProvider,
} = actions;

export const fetchProvider = () => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const data = await providerAPI.getAll();
      dispatch(setProvider(data));
      dispatch(setIsLoading(false));
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      dispatch(setIsProcessing(false));
    }
  };
};
export const createProvider = (provider) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await providerAPI.create(provider);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch(addProvider(data));
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
export const updateProvider = (provider) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await providerAPI.update(provider);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch(editProvider(data));
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
export const deleteProvider = (id) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await providerAPI.delete(id);
      dispatch(removeProvider(data));
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
