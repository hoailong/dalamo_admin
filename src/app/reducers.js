import { combineReducers } from "@reduxjs/toolkit";
import alertSlice from "../features/Alert/slice";
import regionSlice from "../features/admin-features/Region/slice";
import userSlice from "../features/admin-features/User/slice";
import categorySlice from "../features/admin-features/Category/slice";
import compareSlice from "../components/Modal/Compare/slice";
import loginSlice from "../components/Modal/LoginUser/slice";
import productSlice from "./slices/product";
import categorySlice from "./slices/category";
import cartSlice from "./slices/cart";
import commentSlice from "./slices/comment";

const rootReducer = combineReducers({
  alerts: alertSlice,
  users: userSlice,
  category: categorySlice,
  regions: regionSlice,
  compare: compareSlice,
  login: loginSlice,
  category: categorySlice,
  cart: cartSlice,
  product: productSlice,
  comment: commentSlice,
});

export default rootReducer;
