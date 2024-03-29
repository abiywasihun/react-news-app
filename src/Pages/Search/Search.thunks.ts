import { searchNewsApi } from '../../apis/search.api';
import * as actions from './Search.actions';

export const getsearchApi = (payload: any) => dispatch => {
  dispatch(actions.searchRequested());
  return searchNewsApi(payload)
    .then(res => {
      return dispatch(actions.searchSuccess(res));
    })
    .catch(err => Promise.reject(dispatch(actions.searchFailed(err))));
};

export const searchBarData = (payload: any) => dispatch => {
  console.log(payload);
  return dispatch(actions.searchBarSuccess(payload));

};
