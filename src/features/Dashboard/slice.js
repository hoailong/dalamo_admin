import dashboardAPI from "./api";
import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const initialDashboard = {
  dataDB: [],
  isLoading: false,
};

const dashboard = createSlice({
  name: "dashboard",
  initialState: initialDashboard,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setDataDB: (state, action) => {
      state.dataDB = action.payload;
    },
  },
});

const { reducer, actions } = dashboard;

export const { setIsLoading, setDataDB } = actions;

export const fetchDataDB = () => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const data = await dashboardAPI.getData();
      dispatch(setDataDB(data));
      dispatch(setIsLoading(false));
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
};
export default reducer;
