import axios from "axios";
import User from "./User";
const server = axios.create({
    baseURL: 'http://localhost:8000',
});
server.interceptors.request.use(
    config => {
        const token = User.getUserToken();
        config.headers['x-access-token'] = token;
        return config;
    },
    error => Promise.reject(error));
export default server;