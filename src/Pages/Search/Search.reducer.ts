import * as types from './Search.constants';
import produce from 'immer';

const initialState = {
  loading: false,
  searchNews: [] as any[],
  searchBar:'',
};

export const SearchReducer = (state = initialState, action?:any) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SEARCH_REQUESTED:
        draft.loading = true;
        break;
      case types.SEARCH_SUCCESS:
        draft.loading = false;
        draft.searchNews = action.payload.articles;
        break;
      case types.SEARCH_BAR_SUCCESS:
        draft.loading = false;
        draft.searchBar = action.payload;
        break;
      case types.SEARCH_FAILED:
        draft.loading = false;
        break;
      default:
        return state;
    }
  });
