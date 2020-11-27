import React, { Component } from "react";
import { Route } from "react-router";
import MainLayout from "../../components/Layout";

function UserLayoutRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
}

export default UserLayoutRoute;
