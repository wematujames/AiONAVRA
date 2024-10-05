export default (state, action) => {
  switch (action.type) {
    case "CREATE_APPOINTMENT":
      return { ...state, loading: false };

    case "GET_APPOINTMENTS":
      return {
        ...state,
        loading: false,
        routes: action.payload,
      };

    case "GET_APPOINTMENT":
      return {
        ...state,
        route: action.payload,
        loading: false,
      };

    case "RESPOND_TO_APPOINTMENT_REQUEST":
      return {
        ...state,
        loading: false,
      };

    case "UPDATE_APPOINTMENT":
      return {
        ...state,
        loading: false,
      };

    case "DELETE_APPOINTMENT":
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