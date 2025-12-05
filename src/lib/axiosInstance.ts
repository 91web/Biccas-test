import axios from "axios";
import { getAccessToken, getRefreshToken, setTokens } from "./auth";

const axiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach access token
axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for automatic refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      getRefreshToken()
    ) {
      originalRequest._retry = true;
      try {
        const { data } = await axios.post(
          "/api/refresh-token",
          { refreshToken: getRefreshToken() },
          { baseURL: "" } // local API route
        );
        setTokens(data.access_token, data.refresh_token);
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${data.access_token}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        console.error("Refresh token failed", err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
