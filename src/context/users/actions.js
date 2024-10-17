import { navigate } from "../../utils/navigationRef";
import aionavraApi from "../api/aionavraApi";
import { calculateDistance } from "../../utils/common";

const THRESHOLD_DISTANCE = 3000;
const OFFICE_LOCATION = {
  latitude: 37.68035365,
  longitude: -122.47161149,
};

const setErrorMsg = (dispatch, err) => {
  dispatch({ type: "AUTH_ERROR", payload: err });

  setTimeout(() => {
    dispatch({ type: "CLEAR_AUTH_ERROR" });
  }, 3000);
};

const actions = {
  creatUser: (dispatch) => async (data) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      await aionavraApi.post("/users", data);

      dispatch({ type: "CREATE_USER" });

      navigate("UsersListScreen");
    } catch (err) {
      console.log(err);
    }
  },

  getUsers: (dispatch) => async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const res = await aionavraApi.get("/users");

      dispatch({ type: "GET_USERS", payload: res.data.data });
    } catch (error) {
      // console.log(error.response.data);
    }
  },

  getUser: (dispatch) => async (id) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const res = await aionavraApi.get("/users/" + id);

      dispatch({ type: "GET_USER", payload: res.data.data });
    } catch (error) {
      // console.log(error.response.data);
    }
  },

  updateUser: (dispatch) => async (update, id) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const res = await aionavraApi.put("/users/" + id, update);

      dispatch({ type: "UPDATE_USER" });

      navigate("UsersListScreen");
    } catch (err) {
      console.log(err.response);
      console.log(err.response.data);
    }
  },

  updateUserOfficeStatus: (dispatch) => async (location, userId) => {
    try {
      const distanceFromOffice = calculateDistance(
        OFFICE_LOCATION.latitude,
        OFFICE_LOCATION.longitude,
        location[0].coords.latitude,
        location[0].coords.longitude,
      );

      const res = await aionavraApi.put("/users/" + userId, {
        inOffice: THRESHOLD_DISTANCE > distanceFromOffice,
      });

      dispatch({ type: "UPDATE_USER" });

      // navigate("UsersListScreen");
    } catch (err) {
      console.log(err);
      console.log(err.response);
      console.log(err.response.data);
    }
  },

  deleteUser: (dispatch) => async (id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    await aionavraApi.delete("/users/" + id);

    dispatch({ type: "DELETE_USER" });

    navigate("UsersListScreen");
  },
};

export default actions;
