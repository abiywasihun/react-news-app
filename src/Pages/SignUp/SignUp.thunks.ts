import { signupApi } from '../../apis/user.api';
import * as actions from './SignUp.actions';
import storage from '../../utils/storage';

export const signupAPI = (payload: any) => dispatch => {
  dispatch(actions.signupRequested());
  return signupApi(payload)
    .then(res => {
      storage.setToken(res.data);
      return dispatch(actions.signupSuccess(res));
    })
    .catch(err => Promise.reject(dispatch(actions.signupFailed(err))));
};
