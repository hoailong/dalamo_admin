import React, { lazy } from "react";
import { Router, BrowserRouter } from "react-router-dom";
import { Switch, Redirect, Route } from "react-router";
import NotFound from "../components/Layout/NotFound";
import Alert from "../components/Layout/Alert";
import UserRoute from "./LayoutRoute/UserLayoutRoute";
import AdminRoute from "./LayoutRoute/AdminLayoutRoute";
const Login = lazy(() => import("../components/Login"));
const User = lazy(() => import("../features/admin-features/User"));
const Category = lazy(() => import("../features/admin-features/Category"));
const Product = lazy(() => import("../features/admin-features/Product"));
const Brand = lazy(() => import("../features/admin-features/Brand"));
const Provider = lazy(() => import("../features/admin-features/Provider"));
const Region = lazy(() => import("../features/admin-features/Region"));
const HomePage = lazy(() => import("../features/user-features/Home"));

function Routes() {
  return (
    <BrowserRouter>
      <Alert />
      <Switch>
        <Redirect exact path="/admin/" to="/admin/product" />
        <AdminRoute exact path="/admin/users" component={User} />
        <AdminRoute exact path="/admin/product" component={Product} />
        <AdminRoute exact path="/admin/category" component={Category} />
        <AdminRoute exact path="/admin/brand" component={Brand} />
        <AdminRoute exact path="/admin/provider" component={Provider} />
        <AdminRoute exact path="/admin/providers" component={Region} />
        <Route exact path="/login" component={Login} />
        <UserRoute exact path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
