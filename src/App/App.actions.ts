import * as types from './App.constants';

export const logout = () => ({
  type: types.LOGOUT,
});
export const authenticated = () => ({
  type: types.AUTHENTICATED,
});
export const preferenceRequested = () => ({
  type: types.PREFERENCE_REQUESTED,
});

export const preferenceSuccess = payload => ({
  type: types.PREFERENCE_SUCCESS,
  payload,
});

export const addUserPerefernceRequested = () => ({
  type: types.ADD_USER_PREFERENCE_REQUESTED,
});

export const addUserPerefernceRequestedSuccess = payload => ({
  type: types.ADD_USER_PREFERENCE_SUCCESS,
  payload,
});

export const addUserPerefernceRequestedFailed = payload => ({
  type: types.ADD_USER_PREFERENCE_FAILED,
  payload,
});

export const preferenceFailed = payload => ({
  type: types.PREFERENCE_FAILED,
  payload,
});


export const toggleSideNav = () => ({
  type: types.CLOSE_SIDE_NAV,
});
