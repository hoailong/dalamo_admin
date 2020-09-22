import React, { Component } from "react";
import { Route } from "react-router";
import UserLayout from "../../components/Layout/UserLayout";

function UserLayoutRoute({ component: Component, ...rest }) {
    const isLogin = false;
    let user = "";
    if (isLogin) {
        user = {
            name: "Sơn Tùng"
        }
    }
    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <UserLayout user={user}>
                    <Component {...matchProps} />
                </UserLayout>
            )}
        />
    );
}

export default UserLayoutRoute;