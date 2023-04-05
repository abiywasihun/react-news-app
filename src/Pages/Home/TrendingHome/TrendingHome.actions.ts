import * as types from "./TrendingHome.constants"

export const getTrendingHomeRequested = () => ({
  type: types.GET_TRENDING_HOME_LIST_REQUESTED
})

export const getTrendingHomeSuccess = payload => {
  return {
    type: types.GET_TRENDING_HOME_LIST_SUCCESS,
    payload
  }
}

export const getTrendingHomeFailed = payload => ({
  type: types.GET_TRENDING_HOME_LIST_FAILED,
  payload
})

export const getArtNewsRequested = () => ({
  type: types.GET_ART_NEWS_LIST_REQUESTED
})

export const getArtNewsSuccess = payload => {
  return {
    type: types.GET_ART_NEWS_LIST_SUCCESS,
    payload
  }
}

export const getArtNewsFailed = payload => ({
  type: types.GET_ART_NEWS_LIST_FAILED,
  payload
})

export const getScinceNewsRequested = () => ({
  type: types.GET_SCIENCE_NEWS_LIST_REQUESTED
})

export const getScinceNewsSuccess = payload => {
  return {
    type: types.GET_SCIENCE_NEWS_LIST_SUCCESS,
    payload
  }
}

export const getScinceNewsFailed = payload => ({
  type: types.GET_SCIENCE_NEWS_LIST_FAILED,
  payload
})


export const getWorldNewsRequested = () => ({
  type: types.GET_WORLD_NEWS_LIST_REQUESTED
})

export const getWorldNewsSuccess = payload => {
  return {
    type: types.GET_WORLD_NEWS_LIST_SUCCESS,
    payload
  }
}

export const getWorldNewsFailed = payload => ({
  type: types.GET_WORLD_NEWS_LIST_FAILED,
  payload
})
