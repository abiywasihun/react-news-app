import { loginApi } from '../../apis/user.api';
import * as actions from './Login.actions';
import storage from '../../utils/storage';

export const login = (payload: any) => dispatch => {
  dispatch(actions.loginRequested());
  return loginApi(payload)
    .then(res => {
      storage.setToken(res.data);
      return dispatch(actions.loginSuccess(res));
    })
    .catch(err => Promise.reject(dispatch(actions.loginFailed(err))));
};
