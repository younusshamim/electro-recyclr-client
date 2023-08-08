import axios from "axios";

const instance = axios.create({
  // baseURL: "https://electro-recyclr-server.vercel.app/",
  baseURL: "http://localhost:5000/",
  //   timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const authToken = `${localStorage.getItem("accessToken")}`;
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
