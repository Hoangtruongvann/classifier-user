import axios from "axios";
import helperFunctions from "../utils/helperFunctions";
// import { toast } from "react-toastify";
axios.defaults.withCredentials = true;

const axiosClient = axios.create({
  // baseURL: process.env.REACT_APP_API,
  baseURL: "http://localhost:8000",
});

axiosClient.interceptors.request.use(
  (config) => {

    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    // set token from cookies 
    const token = helperFunctions.getCookie("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log(`Bearer ${token}`)
    }
   
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
    //   toast.error("Unauthorization!");
    console.log("Unauthorization!");
    }
    return {
      data: { status: false, message: "Error, please try again later!" },
    };
  }
);

export default axiosClient;