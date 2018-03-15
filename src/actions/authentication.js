import {
  AUTHENTICATION_LOGIN_ATTEMPT,
  AUTHENTICATION_LOGIN_FAILURE,
  AUTHENTICATION_LOGIN_SUCCESS,
  AUTHENTICATION_LOGOUT_FAILURE,
  AUTHENTICATION_LOGOUT_SUCCESS,
  AUTHENTICATION_SESSION_CHECK_ATTEMPT,
  AUTHENTICATION_SESSION_CHECK_FAILURE,
  AUTHENTICATION_SESSION_CHECK_SUCCESS
} from "../constants/actionTypes";

// Login actions
export const loginAttempt = () => ({
  type: AUTHENTICATION_LOGIN_ATTEMPT
});

export const loginFailure = error => ({
  type: AUTHENTICATION_LOGIN_FAILURE,
  error
});

export const loginSuccess = json => ({
  type: AUTHENTICATION_LOGIN_SUCCESS,
  json
});

// Logout actions
export const logoutFailure = error => ({
  type: AUTHENTICATION_LOGOUT_FAILURE,
  error
});

export const logoutSuccess = () => ({
  type: AUTHENTICATION_LOGOUT_SUCCESS
});

// Session actions
export const sessionCheckAttempt = () => ({
  type: AUTHENTICATION_SESSION_CHECK_ATTEMPT
});

export const sessionCheckFailure = () => ({
  type: AUTHENTICATION_SESSION_CHECK_FAILURE
});

export const sessionCheckSuccess = json => ({
  type: AUTHENTICATION_SESSION_CHECK_SUCCESS,
  json
});
