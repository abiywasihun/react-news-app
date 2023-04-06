import * as types from './App.constants';
import { LOGIN_SUCCESS } from '../Pages/Login/Login.constants';
import produce from 'immer';
import storage from '../utils/storage';

const initialState = {
  isAuthenticated: false,
  closeSideNav: false,
};

export const AppReducer = (state = initialState, action?:any) =>
  produce(state, draft => {
    switch (action.type) {
      case types.LOGOUT:
        storage.clearToken();
        draft.isAuthenticated = false;
        break;
      case LOGIN_SUCCESS:
        draft.isAuthenticated = true;
        break;
      case types.CLOSE_SIDE_NAV:
        draft.closeSideNav = !state.closeSideNav;
        break;
      default:
        return state;
    }
  });
