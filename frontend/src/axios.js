
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080'
});

export const setAuthorizationHeader = (token) => {
    axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

export default axiosInstance;