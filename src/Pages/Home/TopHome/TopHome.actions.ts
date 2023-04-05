import * as types from "./TopHome.constants"

export const getTopHomeRequested = () => ({
  type: types.GET_TOP_HOME_LIST_REQUESTED
})

export const getTopHomeSuccess = payload => {
  return {
    type: types.GET_TOP_HOME_LIST_SUCCESS,
    payload
  }
}

export const getTopHomeFailed = payload => ({
  type: types.GET_TOP_HOME_LIST_FAILED,
  payload
})
