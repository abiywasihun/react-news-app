import * as actions from './App.actions';
import { getAllPreferences, postUserPrefernces } from '../apis/user.api';


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

export const updatIsAuthenticated = () => dispatch =>{
  return dispatch(actions.authenticated());
};

export const addUserPerefernce = (payload: any) => dispatch => {
  dispatch(actions.addUserPerefernceRequested());
  return postUserPrefernces(payload)
    .then(res => {
      return dispatch(actions.addUserPerefernceRequestedSuccess(res));
    })
    .catch(err => Promise.reject(dispatch(actions.addUserPerefernceRequestedFailed(err))));
};