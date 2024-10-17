import { navigate } from "../../utils/navigationRef";
import aionavraApi from "../api/aionavraApi";

const setErrorMsg = (dispatch, err) => {
  dispatch({ type: "AUTH_ERROR", payload: err });

  setTimeout(() => {
    dispatch({ type: "CLEAR_AUTH_ERROR" });
  }, 3000);
};

const actions = {
  createFeedback: (dispatch) => async (data) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      await aionavraApi.post("/feedbacks", data);

      dispatch({ type: "CREATE_FEEDBACK" });

      navigate("FeedbackList");
    } catch (err) {
      console.log(err);
    }
  },

  getFeedbacks: (dispatch) => async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const res = await aionavraApi.get("/feedbacks");

      dispatch({ type: "GET_FEEDBACKS", payload: res.data.data });
    } catch (error) {
      // console.log(error.response.data);
    }
  },

  getUserFeeback: (dispatch) => async (userId) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const res = await aionavraApi.get("/feedback/user/" + userId);

      dispatch({ type: "GET_USER_FEEDBACK", payload: res.data.data });
    } catch (error) {
      // console.log(error.response.data);
    }
  },

  updateFeedback: (dispatch) => async (update, id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    await aionavraApi.put("/feedbacks/" + id, update);

    dispatch({ type: "UPDATE_FEEDBACK" });

    navigate("FeedbackList");
  },

  deleteFeedback: (dispatch) => async (id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    await aionavraApi.delete("/feedbacks/" + id);

    dispatch({ type: "DELETE_FEEDBACK" });

    navigate("FeedbackList");
  },
};

export default actions;
