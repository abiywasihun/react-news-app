import * as types from './SignUp.constants';
import produce from 'immer';

const initialState = {
  loading: false,
};

export const signupReducer = (state = initialState, action?:any) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SIGNUP_REQUESTED:
        draft.loading = true;
        break;
      case types.SIGNUP_SUCCESS:
        draft.loading = false;
        break;
      case types.SIGNUP_FAILED:
        draft.loading = false;
        break;
      default:
        return state;
    }
  });
