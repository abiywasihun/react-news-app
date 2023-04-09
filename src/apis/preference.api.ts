import { newsApiAxios, nyApiAxios, guardianApiAxios } from './axios';
import { ENDPOINT } from '../constants/endpoint';
import { NEWS_API_KEY, NEWYORK_TIMES_API_KEY, GUARDIAN_API_KEY } from '../utils/config';


export const getTopNewsApiBySource = (sources:string):
Promise<any> =>{
  const search='sources=' + sources +'&';
  const endpoint = ENDPOINT.TOPHEADLINES + '?' + search + 'pageSize=3&apiKey=' + NEWS_API_KEY;
  return newsApiAxios.get(endpoint);
};

export const getTopNewsApiByCategory = (categories:string):
Promise<any> =>{
  //unlike sources, categories are filtered by only one.
  const category=categories.split(',');
  const random = Math.floor(Math.random() * category.length);
  const search='category=' + category[random] +'&';
  const endpoint = ENDPOINT.TOPHEADLINES + '?' + search + 'pageSize=7&apiKey=' + NEWS_API_KEY;
  return newsApiAxios.get(endpoint);
};

export const getNyCategoriesNewsApi = (categories): Promise<any> =>{
  const search="fq=news_desk:" + (categories) +'&';
  const endpoint = ENDPOINT.ARTICLESEARCHJSON + '?' + search + 'api-key=' + NEWYORK_TIMES_API_KEY;
  return nyApiAxios.get(endpoint);
};

export const getNySourcesNewsApi = (sources): Promise<any> =>{
  const search="fq=source:" + (sources) +'&';
  const endpoint = ENDPOINT.ARTICLESEARCHJSON + '?' + search + 'api-key=' + NEWYORK_TIMES_API_KEY;
  return nyApiAxios.get(endpoint);
};

export const getGuardianCategoriesNewsApi = (categories): Promise<any> =>{
  const search="q=" + categories.replaceAll(",", " OR ") +'&';
  const endpoint = ENDPOINT.THEGUARDIAN + '?' + search + 'api-key=' + NEWYORK_TIMES_API_KEY;
  return guardianApiAxios.get(endpoint);
};

export const getGuardianSourceNewsApi = (sources): Promise<any> =>{
  const search="q=" + sources.replaceAll(",", " OR ") +'&';
  const endpoint = ENDPOINT.THEGUARDIAN + '?' + search + 'api-key=' + NEWYORK_TIMES_API_KEY;
  return guardianApiAxios.get(endpoint);
};