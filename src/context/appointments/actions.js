import { navigate } from "../../utils/navigationRef";
import officeNavApi from "../api/aionavraApi";

const setErrorMsg = (dispatch, err) => {
  dispatch({ type: "AUTH_ERROR", payload: err });

  setTimeout(() => {
    dispatch({ type: "CLEAR_AUTH_ERROR" });
  }, 3000);
};

const actions = {
  createAppointment: (dispatch) => async (routeDetails) => {
    const res = await officeNavApi.post("/apppointments", routeDetails);

    dispatch({ type: "CREATE_APPOINTMENT", payload: res.data });

    navigate("AppointmentList");
  },

  getAppointments: (dispatch) => async () => {
    dispatch({ type: "SET_LOADING", payload: true });

    const res = await officeNavApi.get("/appointments");

    dispatch({ type: "GET_APPOINTMENTS", payload: res.data.data });
  },

  getAppointment: (dispatch) => async (id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    const res = await officeNavApi.get("/appointments/" + id);

    dispatch({ type: "GET_APPOINTMENT", payload: res.data.data });
  },

  updateAppointment: (dispatch) => async (data, id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    const res = await officeNavApi.put("/appointments/" + id, data);

    dispatch({ type: "UPDATE_APPOINTMENT", payload: res.data });

    navigate("AppointmentList");
  },

  respondToAppointment: (dispatch) => async (data, id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    const res = await officeNavApi.put("/appointments/" + id, data);

    dispatch({
      type: "RESPOND_TO_APPOINTMENT_REQUEST",
      payload: res.data,
    });

    navigate("AppointmentList");
  },

  deleteAppointment: (dispatch) => async (id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    const res = await officeNavApi.delete("/appointments/" + id);

    dispatch({ type: "DELETE_APPOINTMENT", payload: res.data });

    navigate("AppointmentList");
  },
};

export default actions;
