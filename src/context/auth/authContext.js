import trackApi from "../api/trackApi";
import createDataContext from "../createDataContext";
import { navigate } from "../../utils/navigationRef";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
      };

    case "SING_IN":
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
      };

    case "SIGN_OUT":
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    case "AUTH_ERROR":
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        errMsg: action.payload.msg,
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
  signUp(dispatch) {
    return async (email, password, cb) => {
      try {
        const res = await trackApi.post("/signup", {
          email,
          password,
        });

        await AsyncStorage.setItem("token", res.data.token);

        dispatch({
          type: "SIGN_UP",
          payload: res.data,
        });

        navigate("Home");
      } catch (err) {
        setErrorMsg(dispatch, { msg: "Something went wrong" });
      }
    };
  },

  signIn(dispatch) {
    return async (email, password, cb) => {
      try {
        const res = await trackApi.post("/signin", {
          email,
          password,
        });

        await AsyncStorage.setItem("token", res.data.token);

        dispatch({
          type: "SIGN_IN",
          payload: res.data,
        });

        navigate("Home");
      } catch (err) {
        setErrorMsg(dispatch, { msg: "Something went wrong" });
      }
    };
  },

  tryLogin: (dispatch) => async () => {
    const token = await AsyncStorage.getItem("token");

    if (!token) return navigate("SignUp");

    dispatch({
      type: "SIGN_IN",
      payload: { token },
    });

    navigate("SelectUserType");
  },

  logout: (dispatch) => async () => {
    await AsyncStorage.removeItem("token");

    dispatch({ type: "SIGN_OUT" });

    navigate("SignIn");
  },
};

const state = {
  user: null,
  isAuthenticated: false,
  token: null,
  loading: true,
};

const { Provider, Context } = createDataContext(reducer, actions, state);

export { Provider, Context };
