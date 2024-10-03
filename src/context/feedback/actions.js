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
  getNotices: (dispatch) => () => {},
  getNotice: (dispatch) => (id) => {},
};

export default actions;
