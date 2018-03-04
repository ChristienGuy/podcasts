const initialState = {
  _id: "",
  firstName: "",
  lastName: "",
  isLoggedIn: false,
  isLoggingIn: false,
  username: ""
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
    case "AUTHENTICATION_LOGIN_FAILURE": {
      const newState = initialState;
      return newState;
    }
    case "AUTHENTICATION_LOGIN_SUCCESS": {
      console.log('====================================');
      console.log(action.json);
      console.log('====================================');
      const { username, firstName, lastName, _id } = action.json;
      const newState = {
        ...state,
        firstName,
        lastName,
        username,
        _id,
        isLoggedIn: true,
        isLoggingIn: false
      };
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
