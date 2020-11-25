import { combineReducers } from "@reduxjs/toolkit";
import alertSlice from "../features/Alert/slice";
import regionSlice from "../features/admin-features/Region/slice";
import userSlice from "../features/admin-features/User/slice";
import categorySlice from "../features/admin-features/Category/slice";
import productSlice from "../features/admin-features/Product/slice";
import brandSlice from "../features/admin-features/Brand/slice";
import providerSlice from "../features/admin-features/Provider/slice";

import compareSlice from "../components/Modal/Compare/slice";

const rootReducer = combineReducers({
  alerts: alertSlice,
  users: userSlice,
  category: categorySlice,
  product: productSlice,
  brand: brandSlice,
  provider: providerSlice,
  regions: regionSlice,
  compare: compareSlice,
});

export default rootReducer;
