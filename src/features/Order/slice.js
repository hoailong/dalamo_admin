import orderAPI from "./api";
import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const initialOrder = {
  order: [],
  isLoading: false,
  isProcessing: false,
  isCompleted: false,
};

const order = createSlice({
  name: "order",
  initialState: initialOrder,
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
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    addOrder: (state, action) => {
      state.isCompleted = true;
      state.order.push(action.payload);
    },
    editOrder: (state, action) => {
      state.isCompleted = true;
      state.order = state.order.map((order) =>
        order.id === action.payload.id ? action.payload : order
      );
    },
    removeOrder: (state, action) => {
      state.isCompleted = true;
      state.order = state.order.filter(
        (order) => order.id !== action.payload.id
      );
    },
  },
});

const { reducer, actions } = order;

export const {
  setIsLoading,
  setIsCompleted,
  setIsProcessing,
  setOrder,
  addOrder,
  editOrder,
  removeOrder,
} = actions;

export const fetchOrder = () => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const data = await orderAPI.getAll();
      dispatch(setOrder(data));
      dispatch(setIsLoading(false));
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      dispatch(setIsProcessing(false));
    }
  };
};
export const createOrder = (order) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await orderAPI.create(order);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch(addOrder(data));
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
export const updateOrder = (order) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await orderAPI.update(order);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch(editOrder(data));
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
export const deleteOrder = (id) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await orderAPI.delete(id);
      dispatch(removeOrder(data));
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
