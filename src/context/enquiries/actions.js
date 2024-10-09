import AsyncStorage from "@react-native-async-storage/async-storage";
import officeNavApi from "../api/aionavraApi";

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

      const messages = (await AsyncStorage.getItem("enquiryMsgs")) || [];

      dispatch({ type: "GET_ENQUIRY_MESSAGES", payload: JSON.parse(messages) });
    } catch (error) {
      // console.log(error.response.data);
    }
  },

  makeEnquiry: (dispatch) => async (message) => {
    dispatch({
      type: "NEW_ENQUIRY",
      payload: { content: message, role: "user" },
    });

    dispatch({ type: "SET_LOADING", payload: true });

    let prevMsgs = JSON.parse(await AsyncStorage.getItem("enquiryMsgs"));

    if (!prevMsgs) prevMsgs = [];

    const res = await officeNavApi.post("/enquiries", {
      messages: [...prevMsgs, { role: "user", content: message }],
    });

    const response = res.data.data.response;

    dispatch({
      type: "NEW_ENQUIRY_RESPONSE",
      payload: { content: response, role: "assistant" },
    });

    await AsyncStorage.setItem(
      "enquiryMsgs",
      JSON.stringify([
        ...prevMsgs,
        { content: message, role: "user" },
        { content: response, role: "assistant" },
      ]),
    );
  },

  deleteEnquiries: (dispatch) => async (id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    await officeNavApi.delete("/feedbacks/" + id);

    dispatch({ type: "DELETE_FEEDBACK" });

    navigate("FeedbackList");
  },
};

export default actions;
