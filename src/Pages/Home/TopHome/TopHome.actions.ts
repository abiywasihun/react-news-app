import * as types from './TopHome.constants';

export const getTopHomeRequested = () => ({
  type: types.GET_TOP_HOME_LIST_REQUESTED,
});

export const getTopHomeSuccess = payload => {
  return {
    type: types.GET_TOP_HOME_LIST_SUCCESS,
    payload,
  };
};

export const getTopHomeFailed = payload => ({
  type: types.GET_TOP_HOME_LIST_FAILED,
  payload,
});

export const getTopHomeCategoryRequested = () => ({
  type: types.GET_TOP_HOME_CATEGORY_REQUESTED,
});

export const getTopHomeCategorySuccess = payload => {
  return {
    type: types.GET_TOP_HOME_CATEGORY_SUCCESS,
    payload,
  };
};

export const getTopHomeSourceSuccess = payload => {
  return {
    type: types.GET_TOP_HOME_SOURCE_SUCCESS,
    payload,
  };
};

export const getTopHomeCategoryFailed = payload => ({
  type: types.GET_TOP_HOME_CATEGORY_FAILED,
  payload,
});
