import axios, { AxiosRequestConfig } from 'axios';

const serviceUrl = process.env.REACT_APP_SERVICE_BASE_URL || '';

export default class AxiosService {
    baseURL: string;
    constructor(baseURL: string = serviceUrl) {
        this.baseURL = baseURL;
    }

    request(url: string, options: AxiosRequestConfig) {
        const fetchOptions: AxiosRequestConfig = {
            ...options,
            headers: {},
        };

        return axios(`${this.baseURL}${url}`, fetchOptions);
    }

    get(url: string, options: AxiosRequestConfig) {
        const getOptions: AxiosRequestConfig = {
            ...options,
            method: 'GET',
        };

        return this.request(url, getOptions);
    }

    post(url: string, options: AxiosRequestConfig) {
        const postOptions: AxiosRequestConfig = {
            ...options,
            method: 'POST',
        };

        return this.request(url, postOptions);
    }

    put(url: string, options: AxiosRequestConfig) {
        const putOptions: AxiosRequestConfig = {
            ...options,
            method: 'PUT',
        };

        return this.request(url, putOptions);
    }

    delete(url: string, options: AxiosRequestConfig) {
        const deleteOptions: AxiosRequestConfig = {
            ...options,
            method: 'DELETE',
        };

        return this.request(url, deleteOptions);
    }
}
