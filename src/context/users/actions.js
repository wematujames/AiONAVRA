import aionavraApi from "../api/aionavraApi";
import officeNavApi from "../api/trackApi";

const setErrorMsg = (dispatch, err) => {
  dispatch({ type: "AUTH_ERROR", payload: err });

  setTimeout(() => {
    dispatch({ type: "CLEAR_AUTH_ERROR" });
  }, 3000);
};

const actions = {
  creatUser: (dispatch) => async (data) => {
    dispatch({ type: "SET_LOADING", payload: true });

    await officeNavApi.post("/users", data);

    dispatch({ type: "CREATE_USER" });

    navigate("Home");
  },

  getUsers: (dispatch) => async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const res = await aionavraApi.get("/users");

      dispatch({ type: "GET_USERS", payload: res.data.data });
    } catch (error) {
      // console.log(error.response.data);
    }
  },

  getUser: (dispatch) => async (id) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const res = await aionavraApi.get("/users/" + id);

      dispatch({ type: "GET_USER", payload: res.data.data });
    } catch (error) {
      // console.log(error.response.data);
    }
  },

  updateUser: (dispatch) => async (update, id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    const res = await aionavraApi.get("/users/" + id, update);

    dispatch({ type: "UPDATE_USER" });

    navigate("Home");
  },

  deleteUser: (dispatch) => async (id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    await officeNavApi.delete("/users/" + id);

    dispatch({ type: "DELETE_USER" });

    navigate("Home");
  },
};

export default actions;
