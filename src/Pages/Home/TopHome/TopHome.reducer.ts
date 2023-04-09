import * as types from './TopHome.constants';
import produce from 'immer';

const initialState = {
  loading: false,
  topHeadlines: [] as any[],
};

export const TopHomeReducer = (state = initialState, action?:any) =>
  produce(state, draft => {
    switch (action.type) {
      case types.GET_TOP_HOME_LIST_REQUESTED:
        draft.loading = true;
        break;
      case types.GET_TOP_HOME_LIST_SUCCESS:
        draft.loading = false;
        draft.topHeadlines = action.payload.articles;
        break;
      case types.GET_TOP_HOME_LIST_FAILED:
        draft.loading = false;
        break;
      case types.GET_TOP_HOME_CATEGORY_REQUESTED:
        draft.loading = true;
        break;
      case types.GET_TOP_HOME_CATEGORY_SUCCESS:
        draft.loading = false;
        draft.topHeadlines = [...draft.topHeadlines, ...action.payload.articles];
        break;
      case types.GET_TOP_HOME_SOURCE_SUCCESS:
        draft.loading = false;
        draft.topHeadlines = [...draft.topHeadlines, ...action.payload.articles];
        break;
      case types.GET_TOP_HOME_CATEGORY_FAILED:
        draft.loading = false;
        break;
      default:
        return state;
    }
  });
