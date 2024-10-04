export default (state, action) => {
  switch (action.type) {
    case "CREATE_ROUTE":
      return { ...state, loading: false };

    case "GET_ROUTES":
      return {
        ...state,
        loading: false,
        routes: action.payload,
      };

    case "GET_ROUTE":
      return {
        ...state,
        route: action.payload,
        loading: false,
      };

    case "UPDATE_ROUTE":
      return {
        ...state,
        loading: false,
      };

    case "DELETE_ROUTE":
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
