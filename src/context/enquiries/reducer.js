export default (state, action) => {
  switch (action.type) {
    case "GET_ENQUIRY_MESSAGES":
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };

    case "NEW_ENQUIRY":
      return {
        ...state,
        messages: [...state.messages, action.payload],
        loading: false,
      };

    case "NEW_ENQUIRY_RESPONSE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
        loading: false,
      };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
