import { newsApiAxios} from './axios';
import { ENDPOINT } from "../constants/endpoint"
import { NEWS_API_KEY } from '../utils/config';


export const searchNewsApi = (search:string): Promise<any> =>{
  const endpoint=ENDPOINT.TOPHEADLINES+'?'+search+'apiKey='+NEWS_API_KEY
  return newsApiAxios.get(endpoint);
}