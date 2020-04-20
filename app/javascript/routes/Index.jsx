import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../components/Home";
import Registration from "../components/registration/Registration";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import Navbar from "../components/navbar/Navbar";

export default (
  <Router>
    <Navbar />
    <NotificationContainer />
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <Navbar>
            <Homepage />
          </Navbar>
        )}
      />
      <Route
        path="/registration"
        exact
        render={() => (
          <Navbar>
            <Registration />
          </Navbar>
        )}
      />
    </Switch>
  </Router>
);
