import AsyncStorage from "@react-native-async-storage/async-storage";
import officeNavApi from "../api/aionavraApi";

const actions = {
  saveNotification: (dispatch) => async (notification) => {
    try {
      const notifications = JSON.parse(
        (await AsyncStorage.getItem("notifications")) || "[]",
      );

      notification.push(notification);

      await AsyncStorage.setItem(
        "notifications",
        JSON.stringify(notifications),
      );

      dispatch({ type: "SAVE_NOTIFICATION", payload: notifications.reverse() });
    } catch (err) {
      console.log(err.response.data);
    }
  },

  getNotifications: (dispatch) => async () => {
    dispatch({ type: "SET_LOADING", payload: true });

    const notifications = JSON.parse(
      (await AsyncStorage.getItem("notifications")) || "[]",
    );

    dispatch({ type: "GET_NOTIFICATIONS", payload: notifications.reverse() });
  },

  getNotificaation: (dispatch) => async (id) => {
    dispatch({ type: "SET_LOADING", payload: true });

    const res = await officeNavApi.get("/routes/" + id);

    dispatch({ type: "GET_NOTIFICATION", payload: res.data.data });
  },
};

export default actions;
