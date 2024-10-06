import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../../utils/navigationRef";
const setErrorMsg = (dispatch, err) => {
  dispatch({ type: "AUTH_ERROR", payload: err });

  setTimeout(() => {
    dispatch({ type: "CLEAR_AUTH_ERROR" });
  }, 3000);
};

const setLoading = (dispatch) => async (isLoading) => {
  dispatch({ type: "SET_LOADING", payload: isLoading });
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

  authenticate: (dispatch) => async (userType) => {
    let typeOfUser = await AsyncStorage.getItem("userType");

    if (userType) {
      await AsyncStorage.setItem("userType", userType);
      typeOfUser = userType;
    }

    if (!typeOfUser) return navigate("SelectUserType");

    dispatch({ type: "SET_USER_TYPE", payload: typeOfUser });

    await new Promise((res) => {
      setTimeout(() => {
        res();
      });
    });

    switch (typeOfUser) {
      case "Admin":
        return navigate(typeOfUser);

      case "Visitor":
        return navigate(typeOfUser);

      case "Employee":
        return navigate(typeOfUser);

      default:
        navigate("SelectUserType");
    }
  },

  setUserType: (dispatch) => (userType) => {
    dispatch({ type: "SET_USER_TYPE", payload: userType });

    navigate("SplashScreen");
  },
};

export default actions;
