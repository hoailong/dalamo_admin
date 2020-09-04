import { combineReducers } from "@reduxjs/toolkit";
import alertSlice from "../features/Alert/slice";
import regionSlice from "../features/Region/slice";
import userSlice from "../features/User/slice";

const rootReducer = combineReducers({
  alerts: alertSlice,
  users: userSlice,
  regions: regionSlice,
});

export default rootReducer;
