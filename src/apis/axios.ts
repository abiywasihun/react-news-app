import Axios from 'axios';
import { NEWS_API_URL,NEWYORK_TIMES_API_URL,
GUARDIAN_API_URL,LARAVEL_API_URL } from '../utils/config';

export const newsApiAxios = Axios.create({baseURL: NEWS_API_URL,});
newsApiAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },(error) => {
    const message = error.response?.data?.message || error.message;
    return Promise.reject(error);
  });

export const nyApiAxios = Axios.create({baseURL: NEWYORK_TIMES_API_URL,});
nyApiAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },(error) => {
    const message = error.response?.data?.message || error.message;
    return Promise.reject(error);
  });

export const guardianApiAxios = Axios.create({baseURL: GUARDIAN_API_URL,});
guardianApiAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },(error) => {
    const message = error.response?.data?.message || error.message;
    return Promise.reject(error);
  });

export const laravelApiAxios = Axios.create({baseURL: LARAVEL_API_URL,});
laravelApiAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },(error) => {
    const message = error.response?.data?.message || error.message;
    return Promise.reject(error);
  });

