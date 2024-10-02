import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const trackApi  = axios.create({
    baseURL: "https://living-closely-chipmunk.ngrok-free.app"
});

trackApi.interceptors.request.use(
    async (req) => {
        const token = await AsyncStorage.getItem("token");

        if (token){
            req.headers.Authorization = `Bearer ${token}`;
        }

        return req;
    },

    (err) => Promise.reject(err)
)

export default trackApi;