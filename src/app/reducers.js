import { combineReducers } from "@reduxjs/toolkit";
import alertSlice from "../features/Alert/slice";
import regionSlice from "../features/admin-features/Region/slice";
import userSlice from "../features/admin-features/User/slice";
import categorySlice from "../features/admin-features/Category/slice";
import compareSlice from "../components/Modal/Compare/slice";

const rootReducer = combineReducers({
  alerts: alertSlice,
  users: userSlice,
  category: categorySlice,
  regions: regionSlice,
  compare: compareSlice,
});

export default rootReducer;
