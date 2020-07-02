import axios from "axios";

const DEV_URL = "https://jsonplaceholder.typicode.com";

const Api = axios.create({
  baseURL: DEV_URL,
  timeout: 10000,
});

Api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export { Api };
