import * as types from "./TrendingHome.constants"
import produce from "immer"

const initialState = {
  loading: false,
  trendingNews: [] as any[],
  artNews: [] as any[],
  scienceNews: [] as any[],
  worldNews: [] as any[]
}

export const TrendingHomeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.GET_TRENDING_HOME_LIST_REQUESTED:
        draft.loading = true
        break
      case types.GET_TRENDING_HOME_LIST_SUCCESS:
        draft.loading = false
        draft.trendingNews = action.payload.results
        break
      case types.GET_ART_NEWS_LIST_SUCCESS:
        draft.artNews = action.payload.results
        break
      case types.GET_SCIENCE_NEWS_LIST_SUCCESS:
        draft.loading = false
        draft.scienceNews = action.payload.results
        break
      case types.GET_WORLD_NEWS_LIST_SUCCESS:
        draft.loading = false
        draft.worldNews = action.payload.results
        break
      case types.GET_TRENDING_HOME_LIST_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
