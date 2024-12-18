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
    try {
      const res = await officeNavApi.post("/appointments", routeDetails);

      dispatch({ type: "CREATE_APPOINTMENT", payload: res.data });

      navigate("Appointments");
    } catch (err) {
      console.log(err.response.data);
    }
  },

  getAppointments: (dispatch) => async (filter) => {
    dispatch({ type: "SET_LOADING", payload: true });

    const res = await officeNavApi.get("/appointments", { params: filter });

    dispatch({ type: "GET_APPOINTMENTS", payload: res.data.data });
  },

  getAppointment: (dispatch) => async (id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    const res = await officeNavApi.get("/appointments/" + id);

    dispatch({ type: "GET_APPOINTMENT", payload: res.data.data });
  },

  updateAppointment: (dispatch) => async (data, id) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const res = await officeNavApi.put("/appointments/" + id, data);

      dispatch({ type: "UPDATE_APPOINTMENT", payload: res.data.data });

      navigate("Appointments");
    } catch (err) {
      console.log(err.response.data);
    }
  },

  employeeApproval: (dispatch) => async (data, id) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const res = await officeNavApi.put(
        "/appointments/employee/approval/" + id,
        data,
      );

      dispatch({ type: "UPDATE_APPOINTMENT", payload: res.data.data });

      navigate("Appointments");
    } catch (err) {
      console.log(err.response.data);
    }
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
