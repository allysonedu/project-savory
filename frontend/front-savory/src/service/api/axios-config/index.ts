import axios from "axios";

import {
  errorInterceptor,
  responseInterceptor,
  tokenInterceptor,
} from "./interceptors";

const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

api.interceptors.request.use((request) => tokenInterceptor(request));

export { api };
