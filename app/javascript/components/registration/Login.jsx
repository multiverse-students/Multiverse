import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: [],
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSumbit(e) {
    e.preventDefault();
    axios
      .post(`/api/auth/login`, this.state)
      .then((res) => {
        if (res.status == 200) {
          NotificationManager.success(
            `Welcome back ${res.data.user.first_name}!`,
            "Welcome"
          );
        }
      })
      .catch((err) => {
        this.setState({
          errors: err.response.data.errors,
        });
        NotificationManager.error(
          `Please try with different credentials!`,
          "Invalid Credentials"
        );
      });
  }
  render() {
    return (
      <form className="form" className="registration-form" noValidate>
        <TextField
          error={this.state.errors.length > 0 ? true : false}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => this.handleChange(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          error={this.state.errors.length > 0 ? true : false}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => this.handleChange(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOpenIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="mt-4 mb-2"
          onClick={(e) => this.handleSumbit(e)}
        >
          Login
        </Button>
      </form>
    );
  }
}

export default Login;
