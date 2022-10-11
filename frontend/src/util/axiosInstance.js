import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v0.1";

export const authApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: Boolean(localStorage.getItem("JWT"))
      ? `Bearer ${localStorage.getItem("JWT")}`
      : undefined,
  },
});

const api = axios.create({
  baseURL: BASE_URL,
});

export const request = ({ ...options }) => {
  return api(options)
    .then((response) => response)
    .catch((error) => error);
};
