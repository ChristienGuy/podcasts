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

import {
  AuthenticationState
} from "constants/authenticationState";

const initialState = {
  _id: "",
  firstName: "",
  lastName: "",
  authenticationState: AuthenticationState.NOT_AUTHENTICATED,
  email: "",
  podcasts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION_LOGIN_ATTEMPT: {
      const newState = {
        ...state,
        authenticationState: AuthenticationState.LOGGING_IN
      };
      return newState;
    }
    case AUTHENTICATION_SESSION_CHECK_ATTEMPT: {
      const newState = {
        ...state,
        authenticationState: AuthenticationState.CHECKING_SESSION
      };
      return newState;
    }
    case AUTHENTICATION_LOGOUT_SUCCESS:
    case AUTHENTICATION_LOGIN_FAILURE:
    case AUTHENTICATION_SESSION_CHECK_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    case AUTHENTICATION_LOGIN_SUCCESS:
    case AUTHENTICATION_SESSION_CHECK_SUCCESS: {
      const { firstName, lastName, _id, email, podcasts } = action.json;
      const newState = {
        ...state,
        firstName,
        lastName,
        email,
        _id,
        authenticationState: AuthenticationState.LOGGED_IN,
        podcasts
      };
      return newState;
    }
    case AUTHENTICATION_LOGOUT_FAILURE: {
      // TODO: handle error
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
