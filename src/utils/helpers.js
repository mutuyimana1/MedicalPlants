import axios from "axios";
import { BACKEND_URL } from "./constant";
import { useSelector } from "react-redux";

export const setAuthHeaders = (token, extra) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      ...extra,
    },
  };
};
export const api = axios.create({
  baseURL: BACKEND_URL,
});

api.interceptors.request.use(
  (config) => {
    const { auth } = useSelector((state) => state);
    const token = auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
