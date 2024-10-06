import AsyncStorage from "@react-native-async-storage/async-storage";
import officeNavApi from "../api/trackApi";

const setErrorMsg = (dispatch, err) => {
  dispatch({ type: "AUTH_ERROR", payload: err });

  setTimeout(() => {
    dispatch({ type: "CLEAR_AUTH_ERROR" });
  }, 3000);
};

const actions = {
  getEnquiryMessages: (dispatch) => async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const messages = await AsyncStorage.getItem("enquiryMsgs");

      dispatch({ type: "GET_ENQUIRY_MESSAGES", payload: JSON.parse(messages) });
    } catch (error) {
      // console.log(error.response.data);
    }
  },

  makeEnquiry: (dispatch) => async (message, messages) => {
    dispatch({
      type: "NEW_ENQUIRY",
      payload: { text: message, sender: "user" },
    });

    dispatch({ type: "SET_LOADING", payload: true });

    const res = null; //await officeNavApi.post("/feeedbacks", { message, messages });
    await new Promise((res) => {
      setTimeout(() => {
        res();
      }, 1500);
    });

    const response = "Thank you for your query!" || res.data;

    dispatch({
      type: "NEW_ENQUIRY_RESPONSE",
      payload: { text: response, sender: "bot" },
    });

    await AsyncStorage.setItem(
      "enquiryMsgs",
      JSON.stringify([
        ...messages,
        { text: message, sender: "user" },
        { text: message, response, sender: "bot" },
      ]),
    );
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
