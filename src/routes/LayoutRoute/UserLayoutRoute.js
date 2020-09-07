import React, { Component } from "react";
import { Switch, Redirect, Route, Router } from "react-router-dom";
import UserLayout from "../../components/Layout/UserLayout";

function UserLayoutRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <UserLayout>
                    <Component {...matchProps} />
                </UserLayout>
            )}
        />
    );
}

export default UserLayoutRoute;