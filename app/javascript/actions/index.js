import axios from "axios";
import {
  NotificationManager
} from "react-notifications";


export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

function requestLogin() {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false
  };
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    access_token: user.access_token,
    user: user.user
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  };
}

export function loginUser(creds) {
  return (dispatch) => {
    dispatch(requestLogin());

    return axios
      .post("/api/auth/login", creds)
      .then((response) => {
        if (response.status == 200) {
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("user", JSON.stringify(response.data.user))
          dispatch(receiveLogin(response.data));
          return Promise.resolve(response.status)
        } else {
          dispatch(loginError(response.errors));
          return Promise.reject(response.errors);
        }
      })
      .catch((err) => {
        NotificationManager.error('Invalid Credentials!', 'Login failed');
      });
  };
}

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
    access_token: '',
    user: ''
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    dispatch(receiveLogout());
  };
}