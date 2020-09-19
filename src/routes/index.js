import React, { lazy } from "react";
import { Router, BrowserRouter } from "react-router-dom";
import { Switch, Redirect, Route } from "react-router";
import NotFound from "../components/Layout/NotFound";
import Alert from "../components/Layout/Alert";
import UserRoute from "./LayoutRoute/UserLayoutRoute";
import AdminRoute from "./LayoutRoute/AdminLayoutRoute";
import { history } from "./history";
const Login = lazy(() => import("../components/Login"));
const User = lazy(() => import("../features/admin-features/User"));
const Region = lazy(() => import("../features/admin-features/Region"));
const HomePage = lazy(() => import("../features/user-features/Home"));

function Routes() {

    return (
        <BrowserRouter>
            <Alert />
            <Switch>
                <AdminRoute exact path="/admin/users" component={User} />
                <AdminRoute exact path="/admin/regions" component={Region} />
                <UserRoute exact path="/users" component={User} />
                <UserRoute exact path="/regions" component={Region} />
                <Route exact path="/login" component={Login} />
                <UserRoute exact path="/" component={HomePage} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
