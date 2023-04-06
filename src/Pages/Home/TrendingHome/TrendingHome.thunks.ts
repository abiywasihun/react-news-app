import * as actions from './TrendingHome.actions';
import { getTrendingNewsApi, getArtNewsApi, getScienceNewsApi, getWorldNewsApi } from '../../../apis/home.api';

export const getTrendingNewsList = () => dispatch => {
  dispatch(actions.getTrendingHomeRequested());
  return getTrendingNewsApi()
    .then(res => dispatch(actions.getTrendingHomeSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getTrendingHomeFailed(err))));
};

export const getArtNewsList = () => dispatch => {
  dispatch(actions.getArtNewsRequested());
  return getArtNewsApi()
    .then(res => dispatch(actions.getArtNewsSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getArtNewsFailed(err))));
};

export const getScienceNewsList = () => dispatch => {
  dispatch(actions.getScinceNewsRequested());
  return getScienceNewsApi()
    .then(res => dispatch(actions.getScinceNewsSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getScinceNewsFailed(err))));
};

export const getWorldNewsList = () => dispatch => {
  dispatch(actions.getWorldNewsRequested());
  return getWorldNewsApi()
    .then(res => dispatch(actions.getWorldNewsSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getWorldNewsFailed(err))));
};
