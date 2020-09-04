import regionAPI from "./api";
import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const initialRegion = {
  regions: [],
  isLoading: false,
  isProcessing: false,
  isCompleted: false,
};

const region = createSlice({
  name: "regions",
  initialState: initialRegion,
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
    setRegions: (state, action) => {
      state.regions = action.payload;
    },
    addRegion: (state, action) => {
      state.isCompleted = true;
      state.regions.push(action.payload);
    },
    editRegion: (state, action) => {
      state.isCompleted = true;
      state.regions = state.regions.map((region) =>
        region._id === action.payload._id ? action.payload : region
      );
    },
    removeRegion: (state, action) => {
      state.isCompleted = true;
      state.regions = state.regions.filter(
        (region) => region._id !== action.payload._id
      );
    },
  },
});

const { reducer, actions } = region;

export const {
  setIsLoading,
  setIsCompleted,
  setIsProcessing,
  setRegions,
  addRegion,
  editRegion,
  removeRegion,
} = actions;

export const fetchRegions = () => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const data = await regionAPI.getAll();
      dispatch(setRegions(data));
      dispatch(setIsLoading(false));
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      dispatch(setIsProcessing(false));
    }
  };
};
export const createRegion = (region) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await regionAPI.create(region);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch(addRegion(data));
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
export const updateRegion = (region) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await regionAPI.update(region);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch(editRegion(data));
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
export const deleteRegion = (id) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await regionAPI.delete(id);
      dispatch(removeRegion(data));
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
