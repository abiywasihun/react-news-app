import * as actions from './TopHome.actions';
import { getTopNewsApi } from '../../../apis/home.api';
import { 
  getTopNewsApiBySource, 
  getTopNewsApiByCategory, 
} from '../../../apis/preference.api';

export const getTopNewsList = () => dispatch => {
  dispatch(actions.getTopHomeRequested());
  return getTopNewsApi()
    .then(res => dispatch(actions.getTopHomeSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getTopHomeFailed(err))));
};

export const getTopNewsListBySource = (sources) => dispatch => {
  dispatch(actions.getTopHomeRequested());
  return getTopNewsApiBySource(sources)
    .then(res => dispatch(actions.getTopHomeSourceSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getTopHomeFailed(err))));
};

export const getTopNewsListByCategory = (categories) => dispatch => {
  dispatch(actions.getTopHomeCategoryRequested());
  return getTopNewsApiByCategory(categories)
    .then(res => dispatch(actions.getTopHomeCategorySuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getTopHomeCategoryFailed(err))));
};
