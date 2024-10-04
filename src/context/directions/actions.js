import officeNavApi from "../api/trackApi";

const actions = {
  createRoute: (dispatch) => async (routeDetails) => {
    const res = await officeNavApi.post("routes", routeDetails);

    console.log("new route", res.data);

    dispatch({ type: "CREATE_ROUTE", payload: res.data });
  },

  getRoutes: (dispatch) => async () => {
    setLoading(true);

    // await new Promise((res) => {
    //   setTimeout(() => {
    //     res();
    //   });
    // });

    const res = await officeNavApi.get("routes");

    dispatch({ type: "GET_ROUTES", payload: res.data });
  },

  getRoute: (dispatch) => async (id) => {
    const res = await officeNavApi.get("routes/" + id);

    console.log(res.data);

    dispatch({ type: "GET_ROUTE", payload: res.data });
  },

  updateRoute: (dispatch) => async (data, id) => {
    setLoading(true);

    const res = await officeNavApi.put("routes/" + id, data);

    dispatch({ type: "UPDATE_ROUTE", payload: res.data });
  },

  deleteRoute: (dispatch) => async (id) => {
    setLoading(true);

    const res = await officeNavApi.delete("routes/" + id);

    dispatch({ type: "DELETE_ROUTE", payload: res.data });
  },
};

const setLoading = (dispatch) => async (isLoading) => {
  dispatch({ type: "SET_LOADING", payload: isLoading });
};

const setErrorMsg = (dispatch, err) => {
  dispatch({ type: "AUTH_ERROR", payload: err });

  setTimeout(() => {
    dispatch({ type: "CLEAR_AUTH_ERROR" });
  }, 3000);
};

export default actions;
