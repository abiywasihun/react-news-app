import * as types from "./Search.constants"

export const searchRequested = () => ({
  type: types.SEARCH_REQUESTED
})

export const searchSuccess = payload => ({
  type: types.SEARCH_SUCCESS,
  payload
})

export const searchFailed = payload => ({
  type: types.SEARCH_FAILED,
  payload
})

export const searchBarSuccess = payload => ({
  type: types.SEARCH_BAR_SUCCESS,
  payload
})

