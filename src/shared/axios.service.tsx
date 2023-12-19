import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

const instance = axios.create();
export default instance;

interface IAxiosService {
    url: string;
    headers?: AxiosRequestConfig;
}

// Axios service
const axiosService = (config: IAxiosService) => {
    // config header
    //   if (config.headers) {
    //     axios.defaults.headers = { ...axios.defaults.headers, ...config.headers };
    //   }
    return axios;
};

// --------- Get ---------
export const callGet = (url: string, params?: any) =>
    axiosService({ url })
        .get(url, { params: params })
        .then((response) => response.data)
        .catch((error) => {
            throw error.response?.data || error;
        })

// --------- Post ---------
export const callPost = (url: string, data?: any) =>
    axiosService({ url })
        .post(url, data)
        .then((response) => response.data)
        .catch((error) => {
            throw error.response?.data || error;
        })

// --------- Put ---------
export const callPut = (url: string, data?: any) =>
    axiosService({ url })
        .put(url, data)
        .then((response) => response.data)
        .catch((error) => {
            throw error.response?.data || error;
        })

// --------- Patch ---------
export const callPatch = (url: string, data?: any) =>
    axiosService({ url })
        .patch(url, data)
        .then((response) => response.data)
        .catch((error) => {
            throw error.response?.data || error;
        })

// --------- Delete ---------
export const callDelete = (url: string, data?: any) =>
    axiosService({ url })
        .delete(url, data)
        .then((response) => response.data)
        .catch((error) => {
            throw error.response?.data || error;
        })
