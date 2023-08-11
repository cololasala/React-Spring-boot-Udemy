import axios from "axios";

const usersApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1`, //usamos la ruta definida en variable global del archivo .env
});

usersApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "Authorization": sessionStorage.getItem("token"),
  };

  return config;
});

export default usersApi;
