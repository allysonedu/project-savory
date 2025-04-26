import axios from "axios";

import {
  errorInterceptor,
  responseInterceptor,
  tokenInterceptor,
} from "./interceptors";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // precisa ser NEXT_PUBLIC para aparecer no client!
});
api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

api.interceptors.request.use((request) => tokenInterceptor(request));

export { api };
