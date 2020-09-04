const { createSlice } = require("@reduxjs/toolkit");

const alert = createSlice({
  name: "alerts",
  initialState: {},
  reducers: {
    alertSuccess: (state, action) => {
      return { type: "success", message: action.payload };
    },
    alertWarning: (state, action) => {
      return { type: "warn", message: action.payload };
    },
    alertError: (state, action) => {
      console.log(action);
      return { type: "error", message: action.payload };
    },
    clearAlert: (state, action) => {
      return {};
    },
  },
});

const { actions, reducer } = alert;
export const { alertSuccess, alertWarning, alertError, clearAlert } = actions;
export default reducer;
