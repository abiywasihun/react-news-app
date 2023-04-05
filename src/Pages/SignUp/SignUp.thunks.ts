import { signupApi } from "../../apis/user.api"
import * as actions from "./SignUp.actions"

export const signup = (payload: any) => dispatch => {
  dispatch(actions.signupRequested())
  return signupApi(payload)
    .then(res => {
      localStorage.setItem("token", res.data.access_token)
      return dispatch(actions.signupSuccess(res))
    })
    .catch(err => Promise.reject(dispatch(actions.signupFailed(err))))
}
