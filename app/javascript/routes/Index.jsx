import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../components/Home";
import Registration from "../components/registration/Registration";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/registration" exact component={Registration} />
    </Switch>
  </Router>
);
