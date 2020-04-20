import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import { NotificationManager } from "react-notifications";
import { withRouter } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      password_confirmation: "",
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
      .post(`/api/registrations`, this.state)
      .then((res) => {
        if (res.status == 201) {
          const creds = {
            email: this.state.email,
            password: this.state.password,
          };
          this.props.logIn(creds).then((res) => {
            if (res == 200) {
              this.props.history.push("/");
              NotificationManager.success(
                "You have successfully logged in!",
                "Welcome"
              );
            }
          });
        }
      })
      .catch((err) => {
        NotificationManager.error(
          "Please fill in form correctly!",
          "SignUp failed"
        );
      });
  }
  render() {
    return (
      <form className="form" className="registration-form" noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          onChange={(e) => this.handleChange(e)}
          autoFocus
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="first_name"
          label="First Name"
          name="first_name"
          autoComplete="First Name"
          onChange={(e) => this.handleChange(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="last_name"
          label="Last Name"
          name="last_name"
          autoComplete="Last Name"
          onChange={(e) => this.handleChange(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
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
        <TextField
          margin="normal"
          required
          fullWidth
          name="password_confirmation"
          label="Confirm Password"
          type="password"
          id="password_confirmation"
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
          Sign Up
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (creds) => {
      return dispatch(loginUser(creds));
    },
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
