import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../components/Home";
import Registration from "../components/registration/Registration";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

export default (
  <Router>
    <NotificationContainer />
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/registration" exact component={Registration} />
    </Switch>
  </Router>
);
