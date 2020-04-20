import React, { Component, PropTypes } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import { NotificationManager } from "react-notifications";
import { withRouter } from "react-router-dom";

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
    const creds = { email: this.state.email, password: this.state.password };
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

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (creds) => {
      return dispatch(loginUser(creds));
    },
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Login));
