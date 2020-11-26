import { combineReducers } from "@reduxjs/toolkit";
import alertSlice from "../features/Alert/slice";
import regionSlice from "../features/Region/slice";
import usersSlice from "../features/User/slice";
import userSlice from "../features/Customer/slice";
import categorySlice from "../features/Category/slice";
import productSlice from "../features/Product/slice";
import brandSlice from "../features/Brand/slice";
import providerSlice from "../features/Provider/slice";
import orderSlice from "../features/Order/slice";
import orderStatusSlice from "../features/OrderStatus/slice";

const rootReducer = combineReducers({
  alerts: alertSlice,
  users: usersSlice,
  user: userSlice,
  category: categorySlice,
  product: productSlice,
  brand: brandSlice,
  provider: providerSlice,
  order: orderSlice,
  orderStatus: orderStatusSlice,
  regions: regionSlice,
});

export default rootReducer;
