const initialState = {
  _id: "",
  firstName: "",
  lastName: "",
  isLoggedIn: false,
  isLoggingIn: false,
  email: "",
  podcasts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATION_LOGIN_ATTEMPT": {
      const newState = {
        ...state,
        isLoggingIn: true
      };
      return newState;
    }
    case "AUTHENTICATION_LOGOUT_SUCCESS":
    case "AUTHENTICATION_LOGIN_FAILURE":
    case "AUTHENTICATION_SESSION_CHECK_FAILURE": {
      const newState = { ...initialState };
      return newState;
    }
    case "AUTHENTICATION_LOGIN_SUCCESS":
    case "AUTHENTICATION_SESSION_CHECK_SUCCESS": {
      const { firstName, lastName, _id, email, podcasts } = action.json;
      const newState = {
        ...state,
        firstName,
        lastName,
        email,
        _id,
        isLoggedIn: true,
        isLoggingIn: false,
        podcasts
      };
      return newState;
    }
    case "AUTHENTICATION_LOGOUT_FAILURE": {
      // TODO: handle error
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
