import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v0.1";

export const authApi = axios.create({
  baseURL: BASE_URL,
});
authApi.defaults.headers["Content-Type"] = "application/json";
authApi.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
  "JWT",
)}`;

const api = axios.create({
  baseURL: BASE_URL,
});

export const request = ({ ...options }) => {
  return api(options)
    .then((response) => response)
    .catch((error) => error);
};
