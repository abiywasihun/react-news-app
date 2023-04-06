import * as actions from './TopHome.actions';
import { getTopNewsApi } from '../../../apis/home.api';

export const getTopNewsList = () => dispatch => {
  dispatch(actions.getTopHomeRequested());
  return getTopNewsApi()
    .then(res => dispatch(actions.getTopHomeSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getTopHomeFailed(err))));
};
