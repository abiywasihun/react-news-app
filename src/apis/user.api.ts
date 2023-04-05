import { newsApiAxios} from './axios';
import { ENDPOINT } from "../constants/endpoint"
import { NEWS_API_KEY } from '../utils/config';


export const loginApi = ({
  email,
  password
}: any): Promise<any> =>{
  const user={
    email,
    password
  }
  return laravelApiAxios.post(ENDPOINT.LOGIN,user);
}

export const  = (): Promise<any> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "123") {
        resolve({
          data: {
            access_token: "82jdu82193yh90sad83hxfgsd"
          },
          message: "Login thành công"
        })
      } else {
        reject(new Error("Login thất bại"))
      }
    }, 100)
  })


export const signupApi =({
  name,
  username,
  password
}: any): Promise<any> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "123") {
        resolve({
          data: {
            access_token: "82jdu82193yh90sad83hxfgsd"
          },
          message: "Login thành công"
        })
      } else {
        reject(new Error("Login thất bại"))
      }
    }, 100)
  })