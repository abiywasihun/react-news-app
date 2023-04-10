import { laravelApiAxios } from './axios';
import { ENDPOINT } from '../constants/endpoint';


export const loginApi = ({
  email,
  password,
}: any): Promise<any> =>{
  const user = {
    email,
    password,
  };
  return laravelApiAxios.post(ENDPOINT.LOGIN, user);
};



export const signupApi = ({
  name,
  email,
  password,
}: any):  Promise<any> =>{
  const user = {
    name,
    email,
    password,
  };
  return laravelApiAxios.post(ENDPOINT.REGISTER, user);
};

export const getAllPreferences = (): Promise<any> =>{
  return laravelApiAxios.get(ENDPOINT.PREFERENCE);
};

export const postUserPrefernces = (payload: any): Promise<any> =>{
  return laravelApiAxios.post(ENDPOINT.PREFERENCE, payload);
};