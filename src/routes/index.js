import React, { lazy } from "react";
import { Router, BrowserRouter } from "react-router-dom";
import { Switch, Redirect, Route } from "react-router";
import NotFound from "../components/Layout/NotFound";
import Alert from "../components/Layout/Alert";
import AdminRoute from "./LayoutRoute/AdminLayoutRoute";
const Login = lazy(() => import("../components/LoginAdmin"));
const User = lazy(() => import("../features/admin-features/User"));
const Category = lazy(() => import("../features/admin-features/Category"));
const Region = lazy(() => import("../features/admin-features/Region"));

function Routes() {

    return (
        <BrowserRouter>
            <Alert />
            <Switch>
                <Redirect exact path="/admin/" to="/admin/users"/>
                <AdminRoute exact path="/admin/users" component={User} />
                <AdminRoute exact path="/admin/products" component={Region} />
                <AdminRoute exact path="/admin/category" component={Category} />
                <AdminRoute exact path="/admin/brands" component={Region} />
                <AdminRoute exact path="/admin/providers" component={Region} />
                <Route exact path="/login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
