import createDataContext from "../createDataContext";
import reducer from "./reducer";
import actions from "./actions";

const state = {
  loading: true,
  notices: [
    {
      _id: 1,
      title: "An example notice title",
      content: `Lorem ipsum dolor sit, amet
         consectetur adipisicing elit. Nesciunt officiis, reiciendis magni blanditiis molestiae iste illo, eos repellat pariatur ratione veniam consectetur
        ? In odio nemo alias beatae voluptates. Ab, recusandae!`,
      priority: "Urgent",
      createdAt: new Date().toISOString(),
    },
  ],
  notice: null,
};

const { Provider, Context } = createDataContext(reducer, actions, state);

export { Provider, Context };
