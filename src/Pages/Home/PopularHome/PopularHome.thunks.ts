import * as actions from "./PopularHome.actions"
import { getPopularNewsApi,getEconomyNewsApi,getPoliticsNewsApi } from "../../../apis/home.api"

export const getPopularNewsList = () => dispatch => {
  dispatch(actions.getPopularHomeRequested())
  return getPopularNewsApi()
    .then(res => dispatch(actions.getPopularHomeSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getPopularHomeFailed(err))))
}

export const getEconomyNewsList = () => dispatch => {
  dispatch(actions.getEconomyNewsRequested())
  return getEconomyNewsApi()
    .then(res => dispatch(actions.getEconomyNewsSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getEconomyNewsFailed(err))))
}

export const getPoliticsNewsList = () => dispatch => {
  dispatch(actions.getPoliticsNewsRequested())
  return getPoliticsNewsApi()
    .then(res => dispatch(actions.getPoliticsNewsSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getPoliticsNewsFailed(err))))
}
