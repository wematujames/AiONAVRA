import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../../utils/navigationRef";
import aionavraApi from "../api/aionavraApi";
import { registerForPushNotificationsAsync } from "../../notifications/push";
const setErrorMsg = (dispatch, err) => {
  dispatch({ type: "AUTH_ERROR", payload: err });

  setTimeout(() => {
    dispatch({ type: "CLEAR_AUTH_ERROR" });
  }, 3000);
};

const actions = {
  signIn(dispatch) {
    return async (email, password, cb) => {
      try {
        const res = await aionavraApi.post("/auth/login", { email, password });

        await AsyncStorage.setItem("token", res.data.data.token);

        navigate("SplashScreen");
      } catch (err) {
        dispatch({
          type: "AUTH_ERROR",
          payload: { msg: "Something went wrong" },
        });
      }
    };
  },

  authenticate: (dispatch) => async (userType, data) => {
    // await AsyncStorage.multiRemove(["token", "userType", "VisitorAuthPhone"]);

    let typeOfUser = await AsyncStorage.getItem("userType");

    if (userType) {
      await AsyncStorage.setItem("userType", userType);
      typeOfUser = userType;
    }

    await new Promise((res) => {
      setTimeout(() => {
        res();
      });
    });

    if (!typeOfUser) return navigate("SelectUserType");

    dispatch({ type: "SET_USER_TYPE", payload: typeOfUser });

    const token = await AsyncStorage.getItem("token");

    switch (typeOfUser) {
      case "Admin":
      case "Employee":
        if (!token) return navigate("SignIn");

        try {
          const res = await aionavraApi.get("/auth/user", {
            headers: { Authorization: "Bearer " + token },
          });

          dispatch({
            type: "LOAD_USER",
            payload: { user: res.data.data, token },
          });

          navigate(res.data.data.userType || typeOfUser);

          const pushToken = await registerForPushNotificationsAsync();

          if (!pushToken) return;

          return await aionavraApi.post("/auth/notifications/savepushtoken", {
            token: pushToken,
          });
        } catch (err) {
          dispatch({
            type: "AUTH_ERROR",
            payload: { msg: err.response?.data?.message },
          });

          return navigate("SignIn");
        }

      case "Visitor":
        if (!token) return navigate("VisitorSignIn");

        try {
          const res = await aionavraApi.get("/visitorauth/profile", {
            headers: { Authorization: "Bearer " + token },
          });

          dispatch({
            type: "LOAD_USER",
            payload: { user: res.data.data, token },
          });

          navigate("Visitor");

          // store push notification token
          const pushToken = await registerForPushNotificationsAsync();

          if (!pushToken) return;

          return await aionavraApi.post(
            "/visitorauth/notifications/savepushtoken",
            { token: pushToken },
          );
        } catch (err) {
          dispatch({
            type: "AUTH_ERROR",
            payload: { msg: err.response?.data?.message },
          });

          return navigate("Visitor");
        }

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

    await AsyncStorage.setItem("token", res.data.data.token);

    return navigate("SplashScreen");
  },

  logout: (dispatch) => async () => {
    await AsyncStorage.clear();
    // await AsyncStorage.multiRemove(
    //["token", "userType", "VisitorAuthPhone"]);

    dispatch({ type: "SIGN_OUT" });

    navigate("SelectUserType");
  },
};

export default actions;
