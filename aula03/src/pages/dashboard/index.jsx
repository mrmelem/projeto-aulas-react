import React from "react";

import { Route } from "react-router-dom";
import Page1 from "./page1";
import Page2 from "./page2";

function dashboard() {
  return (
    <>
      <Route path="/dashboard" exact component={Page1} />
      <Route path="/dashboard/page" exact component={Page2} />
    </>
  );
}

export default dashboard;
