import { navigate } from "../../utils/navigationRef";
import officeNavApi from "../api/trackApi";

const setErrorMsg = (dispatch, err) => {
  dispatch({ type: "AUTH_ERROR", payload: err });

  setTimeout(() => {
    dispatch({ type: "CLEAR_AUTH_ERROR" });
  }, 3000);
};

const actions = {
  setLoading: (dispatch) => (isLoading) => {
    dispatch({ type: "SET_LOADING", payload: isLoading });
  },

  createRoute: (dispatch) => async (routeDetails) => {
    const res = await officeNavApi.post("routes", routeDetails);

    dispatch({ type: "CREATE_ROUTE", payload: res.data });

    navigate("RouteList");
  },

  getRoutes: (dispatch) => async () => {
    dispatch({ type: "SET_LOADING", payload: true });

    const res = await officeNavApi.get("routes");

    dispatch({ type: "GET_ROUTES", payload: res.data });
  },

  getRoute: (dispatch) => async (id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    const res = await officeNavApi.get("routes/" + id);

    dispatch({ type: "GET_ROUTE", payload: res.data });
  },

  updateRoute: (dispatch) => async (data, id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    const res = await officeNavApi.put("routes/" + id, data);

    dispatch({ type: "UPDATE_ROUTE", payload: res.data });

    navigate("RouteList");
  },

  deleteRoute: (dispatch) => async (id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    const res = await officeNavApi.delete("routes/" + id);

    dispatch({ type: "DELETE_ROUTE", payload: res.data });

    navigate("RouteList");
  },
};

export default actions;