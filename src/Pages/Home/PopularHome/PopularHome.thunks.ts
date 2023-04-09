import * as actions from './PopularHome.actions';
import {
  getPopularNewsApi,
  getEconomyNewsApi,
  getPoliticsNewsApi,
} from '../../../apis/home.api';
import {
  getGuardianSourceNewsApi,
  getGuardianCategoriesNewsApi,
} from '../../../apis/preference.api';

export const getPopularNewsList = () => (dispatch) => {
  dispatch(actions.getPopularHomeRequested());
  return getPopularNewsApi()
    .then((res) => dispatch(actions.getPopularHomeSuccess(res)))
    .catch((err) => Promise.reject(dispatch(actions.getPopularHomeFailed(err))));
};

export const getEconomyNewsList = () => (dispatch) => {
  dispatch(actions.getEconomyNewsRequested());
  return getEconomyNewsApi()
    .then((res) => dispatch(actions.getEconomyNewsSuccess(res)))
    .catch((err) => Promise.reject(dispatch(actions.getEconomyNewsFailed(err))));
};

export const getPoliticsNewsList = () => (dispatch) => {
  dispatch(actions.getPoliticsNewsRequested());
  return getPoliticsNewsApi()
    .then((res) => dispatch(actions.getPoliticsNewsSuccess(res)))
    .catch((err) => Promise.reject(dispatch(actions.getPoliticsNewsFailed(err))));
};

export const getCategoryNewsList = (sources) => (dispatch) => {
  dispatch(actions.getCategoryNewsRequested());
  return getGuardianSourceNewsApi(sources)
    .then((res) => dispatch(actions.getCategoryNewsSuccess(res)))
    .catch((err) => Promise.reject(dispatch(actions.getCategoryNewsFailed(err))));
};

export const getSourceNewsList = (categories) => (dispatch) => {
  dispatch(actions.getSourceNewsRequested());
  return getGuardianCategoriesNewsApi(categories)
    .then((res) => dispatch(actions.getSourceNewsSuccess(res)))
    .catch((err) => Promise.reject(dispatch(actions.getSourceNewsFailed(err))));
};