import createDataContext from "../createDataContext";
import reducer from "./reducer";
import actions from "./actions";

const state = {
  loading: true,
  feedbacks: [
    {
      _id: 1,
      rating: 3,
      description: "An example notice title",
      createdAt: new Date().toISOString(),
      user: {
        employeeId: "NRL0002",
        username: "Weamtu James",
        createdAt: new Date().toISOString(),
      },
    },
  ],
  feedback: null,
};

const { Provider, Context } = createDataContext(reducer, actions, state);

export { Provider, Context };
