import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const aionavraApi = axios.create({
  baseURL: "http://172.16.11.242:8249/api/v1",
});

aionavraApi.interceptors.request.use(
  async (req) => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  },

  (err) => Promise.reject(err),
);

export default aionavraApi;
