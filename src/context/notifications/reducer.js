export default (state, action) => {
  switch (action.type) {
    case "SAVE_NOTIFICATION":
      return {
        ...state,
        loading: false,
        notifications: action.payload,
      };

    case "GET_NOTIFICATIONS":
      return {
        ...state,
        notifications: action.payload,
        loading: false,
      };

    case "GET_NOTIFICATION":
      return {
        ...state,
        nofication: action.payload,
        loading: false,
      };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "CLEAR_NOTIFICATION_ERROR":
      return { ...state, errMsg: "" };

    default:
      return state;
  }
};
