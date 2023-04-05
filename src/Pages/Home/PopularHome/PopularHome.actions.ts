import * as types from "./PopularHome.constants"

export const getPopularHomeRequested = () => ({
  type: types.GET_POPULAR_HOME_LIST_REQUESTED
})

export const getPopularHomeSuccess = payload => {
  return {
    type: types.GET_POPULAR_HOME_LIST_SUCCESS,
    payload
  }
}

export const getPopularHomeFailed = payload => ({
  type: types.GET_POPULAR_HOME_LIST_FAILED,
  payload
})

export const getEconomyNewsRequested = () => ({
  type: types.GET_ECONOMY_NEWS_LIST_REQUESTED
})

export const getEconomyNewsSuccess = payload => {
  return {
    type: types.GET_ECONOMY_NEWS_LIST_SUCCESS,
    payload
  }
}

export const getEconomyNewsFailed = payload => ({
  type: types.GET_ECONOMY_NEWS_LIST_FAILED,
  payload
})

export const getPoliticsNewsRequested = () => ({
  type: types.GET_POLITICS_NEWS_LIST_REQUESTED
})

export const getPoliticsNewsSuccess = payload => {
  return {
    type: types.GET_POLITICS_NEWS_LIST_SUCCESS,
    payload
  }
}

export const getPoliticsNewsFailed = payload => ({
  type: types.GET_POLITICS_NEWS_LIST_FAILED,
  payload
})
