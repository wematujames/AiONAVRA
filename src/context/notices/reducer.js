export default (state, action) => {
  switch (action.type) {
    case "GET_NOTICES":
      return {
        ...state,
        notices: action.payload,
        loading: false,
      };

    case "GET_NOTICE":
      return {
        ...state,
        notice: action.payload,
        loading: false,
      };

    case "UPDATE_NOTICE":
      return {
        ...state,
        loading: false,
      };

    case "DELETE_NOTICE":
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
