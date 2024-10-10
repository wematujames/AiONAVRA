import createDataContext from "../createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CURRENT_LOCATION":
      return {
        ...state,
        currentLocation: action.payload,
      };

    case "ADD_LOCATION":
      return {
        ...state,
        currentLocation: action.payload,
        locations: [...state.locations, action.payload],
      };

    case "START_RECORDING":
      return {
        ...state,
        recording: true,
      };

    case "STOP_RECORDING":
      return {
        ...state,
        recording: false,
      };

    case "CHANGE_TRACK_NAME":
      return {
        ...state,
        trackName: action.payload,
      };

    case "RESET":
      return {
        ...state,
        trackName: "",
        locations: [],
      };

    case "CLEAR_AUTH_ERROR":
      return { ...state, errMsg: "" };

    default:
      return state;
  }
};

const setErrorMsg = (dispatch, err) => {
  dispatch({ type: "AUTH_ERROR", payload: err });

  setTimeout(() => {
    dispatch({ type: "CLEAR_AUTH_ERROR" });
  }, 3000);
};

const actions = {
  addLocation: (dispatch) => async (location, recording) => {
    dispatch({
      type: "ADD_CURRENT_LOCATION",
      payload: location,
    });

    if (recording) {
      dispatch({
        type: "ADD_LOCATION",
        payload: location,
      });
    }
  },

  startRecording: (dispatch) => async () => {
    dispatch({
      type: "START_RECORDING",
    });
  },

  stopRecording: (dispatch) => async () => {
    dispatch({
      type: "STOP_RECORDING",
    });
  },

  reset: (dispatch) => async () => {
    dispatch({
      type: "RESET",
    });
  },

  changeTrackName: (dispatch) => async (name) => {
    dispatch({
      type: "CHANGE_TRACK_NAME",
      payload: name,
    });
  },
};

const state = {
  currentLocation: null,
  locations: [],
  recording: false,
  trackName: "",
};

const { Provider, Context } = createDataContext(reducer, actions, state);

export { Provider, Context };
