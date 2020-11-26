import orderStatusAPI from "./api";
import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const initialOrderStatus = {
  orderStatus: [],
  isLoading: false,
  isProcessing: false,
  isCompleted: false,
};

const orderStatus = createSlice({
  name: "orderStatus",
  initialState: initialOrderStatus,
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
    setOrderStatus: (state, action) => {
      state.orderStatus = action.payload;
    },
    addOrderStatus: (state, action) => {
      state.isCompleted = true;
      state.orderStatus.push(action.payload);
    },
    editOrderStatus: (state, action) => {
      state.isCompleted = true;
      state.orderStatus = state.orderStatus.map((orderStatus) =>
        orderStatus.id === action.payload.id ? action.payload : orderStatus
      );
    },
    removeOrderStatus: (state, action) => {
      state.isCompleted = true;
      state.orderStatus = state.orderStatus.filter(
        (orderStatus) => orderStatus.id !== action.payload.id
      );
    },
  },
});

const { reducer, actions } = orderStatus;

export const {
  setIsLoading,
  setIsCompleted,
  setIsProcessing,
  setOrderStatus,
  addOrderStatus,
  editOrderStatus,
  removeOrderStatus,
} = actions;

export const fetchOrderStatus = () => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const data = await orderStatusAPI.getAll();
      dispatch(setOrderStatus(data));
      dispatch(setIsLoading(false));
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      dispatch(setIsProcessing(false));
    }
  };
};
export const createOrderStatus = (orderStatus) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await orderStatusAPI.create(orderStatus);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch(addOrderStatus(data));
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
export const updateOrderStatus = (orderStatus) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await orderStatusAPI.update(orderStatus);
      if (data.error) {
        toast.error(data.error);
      } else {
        dispatch(editOrderStatus(data));
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
export const deleteOrderStatus = (id) => {
  return async (dispatch) => {
    dispatch(setIsProcessing(true));
    try {
      const data = await orderStatusAPI.delete(id);
      dispatch(removeOrderStatus(data));
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
