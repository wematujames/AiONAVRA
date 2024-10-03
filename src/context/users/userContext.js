import createDataContext from "../createDataContext";
import reducer from "./reducer";
import actions from "./actions";

const state = {
  loading: true,
  users: [
    {
      _id: 1,
      employeeId: "NRL0002",
      username: "Weamtu James",
      createdAt: new Date().toISOString(),
      office: {
        _id: 1,
        name: "Room 12",
        floor: "3",
        elevation: "stairs",
        eta: "3 mins",
        directions: `Lorem ipsum dolor sit, amet
         consectetur adipisicing elit. Nesciunt officiis, reiciendis magni blanditiis molestiae iste illo, eos repellat pariatur ratione veniam consectetur
        ? In odio nemo alias beatae voluptates. Ab, recusandae!`,
        createdAt: new Date().toISOString(),
      },
    },
  ],
  user: null,
};

const { Provider, Context } = createDataContext(reducer, actions, state);

export { Provider, Context };
