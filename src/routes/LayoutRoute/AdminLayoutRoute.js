import React, { Component } from "react";
import { Switch, Redirect, Route, Router } from "react-router-dom";
import AdminLayout from "../../components/Layout/AdminLayout";

function AdminLayoutRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <AdminLayout>
                    <Component {...matchProps} />
                </AdminLayout>
            )}
        />
    );
}

export default AdminLayoutRoute;