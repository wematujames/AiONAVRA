import { navigate } from "../../utils/navigationRef";
import aionavraApi from "../api/aionavraApi";

const setErrorMsg = (dispatch, err) => {
  dispatch({ type: "AUTH_ERROR", payload: err });

  setTimeout(() => {
    dispatch({ type: "CLEAR_AUTH_ERROR" });
  }, 3000);
};

const actions = {
  createNotice: (dispatch) => async (data) => {
    dispatch({ type: "SET_LOADING", payload: true });

    await aionavraApi.post("/notices", data);

    dispatch({ type: "CREATE_NOTICE" });

    navigate("Home");
  },

  getNotices: (dispatch) => async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const res = await aionavraApi.get("/notices");

      dispatch({ type: "GET_NOTICES", payload: res.data.data });
    } catch (error) {
      // console.log(error.response.data);
    }
  },

  getNotice: (dispatch) => async (id) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const res = await aionavraApi.get("/notices/" + id);

      dispatch({ type: "GET_NOTICE", payload: res.data.data });
    } catch (error) {
      // console.log(error.response.data);
    }
  },

  updateNotice: (dispatch) => async (update, id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    dispatch({ type: "UPDATE_NOTICE" });

    navigate("Home");
  },

  deleteNotice: (dispatch) => async (id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    await aionavraApi.delete("/notices/" + id);

    dispatch({ type: "DELETE_NOTICE" });

    navigate("Home");
  },
};

export default actions;
