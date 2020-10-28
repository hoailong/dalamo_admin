import { combineReducers } from "@reduxjs/toolkit";
import alertSlice from "../features/Alert/slice";
import regionSlice from "../features/admin-features/Region/slice";
import userSlice from "../features/admin-features/User/slice";
import categorySlice from "../features/admin-features/Category/slice";

const rootReducer = combineReducers({
  alerts: alertSlice,
  users: userSlice,
  category: categorySlice,
  regions: regionSlice,
});

export default rootReducer;
