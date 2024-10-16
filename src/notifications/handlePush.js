import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../utils/navigationRef";

export async function storePushMessage({ title, body, data }) {
  const notifications = JSON.parse(
    (await AsyncStorage.getItem("notifications")) || "[]",
  );

  notifications.push({ title, body, data });

  await AsyncStorage.setItem("notifications", JSON.stringify(notifications));
}

export function handlePush({ data }, navigation) {
  switch (data.type) {
    case "appointment-request":
      navigate("AppointmentDetail", { id: data.appointmentId });

    case "appointment-reminder":
      navigate("AppointmentDetail", { id: data.appointmentId });

    default:
      return;
  }
}
