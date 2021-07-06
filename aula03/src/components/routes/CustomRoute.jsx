import React from "react";

import { Route, Redirect } from "react-router-dom";

const CustomRoute = ({ admin, ...rest }) => {
  const token = localStorage.getItem("mota");

  if (!token && admin) {
    return <Redirect to="/401" />;
  }

  return <Route {...rest} />;
};

export default CustomRoute;
