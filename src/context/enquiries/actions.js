import officeNavApi from "../api/trackApi";

const setErrorMsg = (dispatch, err) => {
  dispatch({ type: "AUTH_ERROR", payload: err });

  setTimeout(() => {
    dispatch({ type: "CLEAR_AUTH_ERROR" });
  }, 3000);
};

const actions = {
  makeEnquiry: (dispatch) => async (data) => {
    dispatch({ type: "SET_LOADING", payload: true });

    await officeNavApi.post("/feeedbacks", data);

    dispatch({ type: "CREATE_FEEDBACK" });

    navigate("FeedbackList");
  },

  getFeedbacks: (dispatch) => async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const res = await officeNavApi.get("/feedbacks");
      console.log("feedbacks", res.data);
      dispatch({ type: "GET_FEEDBACKS", payload: res.data });
    } catch (error) {
      // console.log(error.response.data);
    }
  },

  getFeedback: (dispatch) => async (id) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const res = await officeNavApi.get("/feedbacks/" + id);

      dispatch({ type: "GET_FEEDBACK", payload: res.data });
    } catch (error) {
      // console.log(error.response.data);
    }
  },

  updateFeedback: (dispatch) => async (update, id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    await officeNavApi.put("/feedbacks/" + id);

    dispatch({ type: "UPDATE_FEEDBACK" });

    navigate("FeedbackList");
  },

  deleteFeedback: (dispatch) => async (id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    await officeNavApi.delete("/feedbacks/" + id);

    dispatch({ type: "DELETE_FEEDBACK" });

    navigate("FeedbackList");
  },
};

export default actions;
