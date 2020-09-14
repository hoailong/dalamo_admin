import React, { lazy } from "react";
import { Switch, Redirect, Route, Router } from "react-router-dom";
import NotFound from "../components/Layout/NotFound";
import Alert from "../components/Layout/Alert";
import { createBrowserHistory } from "history";
import UserLayoutRoute from "./LayoutRoute/UserLayoutRoute";
import AdminLayoutRoute from "./LayoutRoute/AdminLayoutRoute";
const Login = lazy(() => import("../components/Login"));
const User = lazy(() => import("../features/admin-features/User"));
const Region = lazy(() => import("../features/admin-features/Region"));

function Routes() {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Alert />
            <Switch>
                <AdminLayoutRoute exact path="/admin/users" component={User} />
                <AdminLayoutRoute exact path="/admin/regions" component={Region} />
                <UserLayoutRoute exact path="/users" component={User} />
                <UserLayoutRoute exact path="/regions" component={Region} />
                <Route exact path="/login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default Routes;
