import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../../utils/navigationRef";
import aionavraApi from "../api/aionavraApi";
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
    await AsyncStorage.clear();

    dispatch({ type: "SIGN_OUT" });

    navigate("SplashScreen");
  },

  authenticate: (dispatch) => async (userType, data) => {
    let typeOfUser = await AsyncStorage.getItem("userType");
    console.log(userType);
    if (userType) {
      await AsyncStorage.setItem("userType", userType);
      typeOfUser = userType;
    }

    await new Promise((res) => {
      setTimeout(() => {
        res();
      }, 3000);
    });

    if (!typeOfUser) return navigate("SelectUserType");

    dispatch({ type: "SET_USER_TYPE", payload: typeOfUser });

    switch (typeOfUser) {
      case "Admin":
        return navigate(typeOfUser);

      case "Visitor":
        const token = await AsyncStorage.getItem("VisitorAuthToken");

        if (!token) return navigate("VisitorSignIn");

        let user;

        try {
          user = await aionavraApi.get("/visitorAuth/profile");
        } catch (err) {
          console.log(res.response.data);
          dispatch({
            type: "AUTH_ERROR",
            payload: err.response?.data?.message,
          });
        }

        return navigate("Visitor");

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

  visitorSignIn: (dispatch) => async (phone) => {
    dispatch({ type: "SET_LOADING", payload: true });

    const res = await aionavraApi.post("/visitorAuth/login", { phone });

    await AsyncStorage.setItem("VisitorAuthPhone", phone);

    dispatch({ type: "SET_LOADING", payload: false });

    return navigate("VisitorSignInOTP");
  },

  visitorSignIn2Fa: (dispatch) => async (otpCode) => {
    dispatch({ type: "SET_LOADING", payload: true });

    const phone = await AsyncStorage.getItem("VisitorAuthPhone");

    if (!phone) return navigate("VisitorSignIn");

    const res = await aionavraApi.post("/visitorAuth/login2fa", {
      phone,
      otpCode,
    });

    await AsyncStorage.setItem("VisitorAuthToken", res.data.data.token);

    return navigate("SplashScreen");
  },
};

export default actions;
