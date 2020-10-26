import { combineReducers } from "@reduxjs/toolkit";
import alertSlice from "../features/Alert/slice";
import regionSlice from "../features/admin-features/Region/slice";
import userSlice from "../features/admin-features/User/slice";
import categorySlice from "../features/admin-features/Category/slice";
import userCompareSlice from "./slices/compare";
import userLoginSlice from "./slices/login";
import userProductSlice from "./slices/product";
import userCategorySlice from "./slices/category";
import userCartSlice from "./slices/cart";
import userCommentSlice from "./slices/comment";

const rootReducer = combineReducers({
  alerts: alertSlice,
  users: userSlice,
  category: categorySlice,
  regions: regionSlice,
  userCompare: userCompareSlice,
  userLogin: userLoginSlice,
  userCategory: userCategorySlice,
  userCart: userCartSlice,
  userProduct: userProductSlice,
  userComment: userCommentSlice,
});

export default rootReducer;
