import React from "react";

import { Route, Redirect } from "react-router-dom";

function CustomRoute({ admin, login, ...rest }) {
  const auth = false;

  if (admin && !auth) {
    return <Redirect to="/login" />;
  }

  if (login && auth) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} />;
}

export default CustomRoute;
