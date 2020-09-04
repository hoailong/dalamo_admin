import React, { useEffect } from "react";
import { Route } from "react-router-dom";

function PrivateRouter({ Component: Component, ...rest }) {
  useEffect(() => {
    if (!window.userInfo) {
      const token = localStorage.getItem("token");
      const userInfo = jwt.decode(token);
      window.userInfo = userInfo;
    }
  }, []);
  return <Route {...rest} redner={(props) => {}} />;
}

export default PrivateRouter;
