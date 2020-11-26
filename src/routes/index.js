import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout";
import Alert from "../components/Layout/Alert";
import NotFound from "../components/Layout/NotFound";
const Login = lazy(() => import("../components/Login"));
const User = lazy(() => import("../features/User"));
const Category = lazy(() => import("../features/Category"));
const Product = lazy(() => import("../features/Product"));
const Brand = lazy(() => import("../features/Brand"));
const Provider = lazy(() => import("../features/Provider"));
const Region = lazy(() => import("../features/Region"));

function Routes() {
  return (
    <BrowserRouter>
      <Alert />
      <MainLayout>
        <Switch>
          {/* <Redirect exact path="/" to="/product" /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/users" component={User} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/brand" component={Brand} />
          <Route exact path="/provider" component={Provider} />
          <Route exact path="/providers" component={Region} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default Routes;
