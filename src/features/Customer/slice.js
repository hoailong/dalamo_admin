import userAPI from "./api";
import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const initialUser = {
  user: [],
  isLoading: false,
  isProcessing: false,
  isCompleted: false,
};

const user = createSlice({
  name: "user",
  initialState: initialUser,
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
    setUser: (state, action) => {
      state.user = action.payload;
    },
    addUser: (state, action) => {
      state.isCompleted = true;
      state.user.push(action.payload);
    },
    editUser: (state, action) => {
      state.isCompleted = true;
      state.user = state.user.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
    removeUser: (state, action) => {
      state.isCompleted = true;
      state.user = state.user.filter((user) => user.id !== action.payload.id);
    },
  },
});

const { reducer, actions } = user;

export const {
  setIsLoading,
  setIsCompleted,
  setIsProcessing,
  setUser,
  addUser,
  editUser,
  removeUser,
} = actions;

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const data = await userAPI.getAll();
      dispatch(setUser(data));
      dispatch(setIsLoading(false));
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      dispatch(setIsProcessing(false));
    }
  };
};
export const createUser = (user) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await userAPI.create(user);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch(addUser(data));
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
export const updateUser = (user) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await userAPI.update(user);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch(editUser(data));
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
export const deleteUser = (id) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await userAPI.delete(id);
      dispatch(removeUser(data));
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
