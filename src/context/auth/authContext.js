import createDataContext from "../createDataContext";
import reducer from "./reducer";
import actions from "./actions";

const state = {
  user: null,
  isAuthenticated: false,
  token: null,
  loading: true,
  userType: "",
};

const { Provider, Context } = createDataContext(reducer, actions, state);

export { Provider, Context };
