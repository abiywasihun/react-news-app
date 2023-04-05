import { newsApiAxios,nyApiAxios,guardianApiAxios } from './axios';
import { ENDPOINT } from "../constants/endpoint"
import { NEWS_API_KEY,NEWYORK_TIMES_API_KEY,GUARDIAN_API_KEY } from '../utils/config';


export const getTopNewsApi = (): Promise<any> =>{
  const endpoint=ENDPOINT.TOPHEADLINES+'?country=us&apiKey='+NEWS_API_KEY
  return newsApiAxios.get(endpoint);
}


export const getTrendingNewsApi = (): Promise<any> =>{
    const endpoint=ENDPOINT.HOMEJSON+'?api-key='+NEWYORK_TIMES_API_KEY
    return nyApiAxios.get(endpoint);
}

export const getArtNewsApi = (): Promise<any> =>{
    const endpoint=ENDPOINT.ARTSJSON+'?api-key='+NEWYORK_TIMES_API_KEY
    return nyApiAxios.get(endpoint);
}

export const getScienceNewsApi = (): Promise<any> =>{
    const endpoint=ENDPOINT.SCIENCEJSON+'?api-key='+NEWYORK_TIMES_API_KEY
    return nyApiAxios.get(endpoint);
}

export const getWorldNewsApi = (): Promise<any> =>{
    const endpoint=ENDPOINT.WORLDJSON+'?api-key='+NEWYORK_TIMES_API_KEY
    return nyApiAxios.get(endpoint);
}



export const getPopularNewsApi = (): Promise<any> =>{
    const endpoint=ENDPOINT.THEGUARDIAN+'?api-key='+GUARDIAN_API_KEY
    return guardianApiAxios.get(endpoint);
}

export const getPoliticsNewsApi = (): Promise<any> =>{
    const endpoint=ENDPOINT.GUARDIANPOLITICS+'&api-key='+GUARDIAN_API_KEY
    return guardianApiAxios.get(endpoint);
}

export const getEconomyNewsApi = (): Promise<any> =>{
    const endpoint=ENDPOINT.GUARDIANECONOMY+'&api-key='+GUARDIAN_API_KEY
    return guardianApiAxios.get(endpoint);
}
