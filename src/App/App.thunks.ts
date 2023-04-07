import * as actions from './App.actions';
import { getAllPreferences } from '../apis/user.api';


export const logout = () => dispatch => {
  return dispatch(actions.logout());
};

export const getAllPreference = () => dispatch => {
  dispatch(actions.preferenceRequested());
  return getAllPreferences()
    .then(res => {
      return dispatch(actions.preferenceSuccess(res));
    })
    .catch(err => Promise.reject(dispatch(actions.preferenceFailed(err))));
};

export const updatIsAuthenticated = () =>dispatch =>{
  return dispatch(actions.authenticated());
};