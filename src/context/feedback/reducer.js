export default (state, action) => {
  switch (action.type) {
    case "GET_FEEDBACKS":
      return {
        ...state,
        feedbacks: action.payload,
        loading: false,
      };

    case "GET_FEEDBACK":
      return {
        ...state,
        feedback: action.payload,
        loading: false,
      };

    case "UPDATE_FEEDBACK":
      return {
        ...state,
        loading: false,
      };

    case "DELETE_FEEDBACK":
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
