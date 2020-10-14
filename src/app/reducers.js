import { combineReducers } from "@reduxjs/toolkit";
import alertSlice from "../features/Alert/slice";
import regionSlice from "../features/admin-features/Region/slice";
import userSlice from "../features/admin-features/User/slice";
import compareSlice from "../components/Modal/Compare/slice";
import loginSlice from "../components/Modal/LoginUser/slice";

const rootReducer = combineReducers({
  alerts: alertSlice,
  users: userSlice,
  regions: regionSlice,
  compare: compareSlice,
  login: loginSlice,
});

export default rootReducer;
