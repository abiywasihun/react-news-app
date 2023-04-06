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
  confirmPassword,
}: any):  Promise<any> =>{
  const user = {
    name,
    email,
    password,
    password_confirmation:confirmPassword,
  };
  return laravelApiAxios.post(ENDPOINT.REGISTER, user);
};