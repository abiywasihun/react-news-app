import * as types from './App.constants';
import { LOGIN_SUCCESS } from '../Pages/Login/Login.constants';
import { SIGNUP_SUCCESS } from '../Pages/SignUp/SignUp.constants';
import produce from 'immer';
import storage from '../utils/storage';

const initialState = {
  loading:false,
  isAuthenticated: false,
  closeSideNav: false,
  preference:[],
};

export const AppReducer = (state = initialState, action?:any) =>
  produce(state, draft => {
    switch (action.type) {
      case types.LOGOUT:
        storage.clearToken();
        draft.isAuthenticated = false;
        draft.preference = [];
        break;
      case LOGIN_SUCCESS:
        draft.isAuthenticated = true;
        break;
      case SIGNUP_SUCCESS:
        draft.isAuthenticated = true;
        break;
      case types.AUTHENTICATED:
        draft.isAuthenticated = true;
        break;
      case types.PREFERENCE_REQUESTED:
        draft.loading = true;
        break;
      case types.PREFERENCE_SUCCESS:
        draft.loading = false;
        draft.preference = action.payload.data;
        break;
      case types.PREFERENCE_FAILED:
        draft.loading = false;
        break;
      case types.ADD_USER_PREFERENCE_REQUESTED:
        draft.loading = true;
        break;
      case types.ADD_USER_PREFERENCE_SUCCESS:
        draft.loading = false;
        draft.preference = action.payload.data;
        break;
      case types.ADD_USER_PREFERENCE_FAILED:
        draft.loading = false;
        break;
      case types.CLOSE_SIDE_NAV:
        draft.closeSideNav = !state.closeSideNav;
        break;
      default:
        return state;
    }
  });


