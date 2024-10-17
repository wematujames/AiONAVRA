export default (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return { ...state, loading: false };

    case "GET_USERS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case "UPDATE_USER":
      return { ...state, loading: false };

    case "DELETE_USER":
      return {
        ...state,
        loading: false,
      };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "CLEAR_AUTH_ERROR":
      return { ...state, errMsg: "" };

    default:
      return state;
  }
};
