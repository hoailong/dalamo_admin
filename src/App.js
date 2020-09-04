import React, { Suspense } from "react";
import "./App.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import MainLayout from "./components/Layout";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NotFound from "./components/Layout/NotFound";
import Loading from "./components/Loading";
import Alert from "./components/Layout/Alert";

const Login = React.lazy(() => import("./components/Login"));
const User = React.lazy(() => import("./features/User"));
const Region = React.lazy(() => import("./features/Region"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <BrowserRouter basename="/admin">
          <Alert />
          <MainLayout>
            <Switch>
              <Redirect exact from="/" to="/restaurants" />
              <Route exact path="/users" component={User} />
              <Route exact path="/regions" component={Region} />O
              <Route exact path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
