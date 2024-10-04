import createDataContext from "../createDataContext";
import reducer from "./reducer";
import actions from "./actions";

const state = {
  loading: true,
  notices: [],
  notice: {},
};

const { Provider, Context } = createDataContext(reducer, actions, state);

export { Provider, Context };
