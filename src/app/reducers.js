import { combineReducers } from "@reduxjs/toolkit";
import alertSlice from "../features/Alert/slice";
import regionSlice from "../features/Region/slice";
import userSlice from "../features/User/slice";
import categorySlice from "../features/Category/slice";
import productSlice from "../features/Product/slice";
import brandSlice from "../features/Brand/slice";
import providerSlice from "../features/Provider/slice";

const rootReducer = combineReducers({
  alerts: alertSlice,
  users: userSlice,
  category: categorySlice,
  product: productSlice,
  brand: brandSlice,
  provider: providerSlice,
  regions: regionSlice,
});

export default rootReducer;
