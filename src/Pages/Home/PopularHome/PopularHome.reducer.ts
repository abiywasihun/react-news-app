import * as types from "./PopularHome.constants"
import produce from "immer"

const initialState = {
  loading: false,
  popularNews: [] as any[],
  economyNews: [] as any[],
  politicsNews: [] as any[],
}

export const PopularHomeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.GET_POPULAR_HOME_LIST_REQUESTED:
        draft.loading = true
        break
      case types.GET_POPULAR_HOME_LIST_SUCCESS:
        draft.loading = false
        draft.popularNews = action.payload.response.results
        break
      case types.GET_ECONOMY_NEWS_LIST_SUCCESS:
        draft.economyNews = action.payload.response.results
        break
      case types.GET_POLITICS_NEWS_LIST_SUCCESS:
        draft.loading = false
        draft.politicsNews = action.payload.response.results
        break
      case types.GET_POPULAR_HOME_LIST_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
