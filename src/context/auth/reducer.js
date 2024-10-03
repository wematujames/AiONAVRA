export default (state, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
      };

    case "SING_IN":
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
      };

    case "SIGN_OUT":
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    case "AUTH_ERROR":
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        errMsg: action.payload.msg,
      };

    case "SET_USER_TYPE":
      return { ...state, userType: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "NO_USER_TYPE":
      return { ...state, loading: action.payload };

    case "CLEAR_AUTH_ERROR":
      return { ...state, errMsg: "" };

    default:
      return state;
  }
};
