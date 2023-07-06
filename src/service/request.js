import axios from "axios";
import { toast } from "react-toastify";
axios.defaults.withCredentials = true;

const axiosClient = axios.create({
  baseURL: "http://localhost:8000/",
});

axiosClient.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      toast.error("Unauthorization!");
    }
    return {
      data: { status: false, message: "Error, please try again later!" },
    };
  }
);

export default axiosClient;
