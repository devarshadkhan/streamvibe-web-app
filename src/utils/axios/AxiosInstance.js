import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Retrieve the token from localStorage
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOThjYzhjZWY2MzAwYWZmY2ViNGJhMWFmNGNlNTU1ZCIsInN1YiI6IjY1MTA5NjA3M2E0YTEyMDBlMjk0ZGExZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nhIVNb6RlUEfEKdpaTn-BZYkVnBT1qj3Q9qRlIekwGk";

    // Add the token to the request headers All API security not directly not access browser API.
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
