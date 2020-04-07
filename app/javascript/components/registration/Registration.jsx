import React, { Component } from "react";
import "./registration.css";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import SignUp from "./SignUp";
import Login from "./Login";

import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { GithubLoginButton } from "react-social-login-buttons";
import { TwitterLoginButton } from "react-social-login-buttons";
import welcome from "../../../assets/images/welcome.png";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="signup-wrapper">
        <div className="signup-container row rounded shadow">
          <div className="col-6 form-wrapper">
            <div className="text-center">
              <Tabs
                value={value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab label="Login" className="tab" />
                <Tab label="Register" className="tab" />
              </Tabs>
            </div>
            <div className="forms-wrapper">
              {value === 1 ? <SignUp /> : <Login />}
            </div>
          </div>
          <div className="col-6 social-container">
            <img src={welcome} className="social-img" />
            <div className="social-buttons">
              <GoogleLoginButton onClick={() => alert("Hello")} />
              <GithubLoginButton onClick={() => alert("Hello")} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
