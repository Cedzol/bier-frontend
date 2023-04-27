import axios, { AxiosInstance } from "axios";

/**
 * Create an Axios instance for the api.
 */
const createAPI = (): AxiosInstance => {
    return axios.create({ baseURL: import.meta.env.VITE_BASEURL });
};

/**
 * api constant is the axios-instance used for all requests to the rest-api.
 */
const api: AxiosInstance = createAPI();

api.interceptors.request.use((config) => {
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE";
    config.headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept";
    config.headers["Content-Type"] = "application/json"
    return config;
})

export default api;
