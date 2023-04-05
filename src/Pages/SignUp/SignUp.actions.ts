import * as types from "./SignUp.constants"

export const signupRequested = () => ({
  type: types.SIGNUP_REQUESTED
})

export const signupSuccess = payload => ({
  type: types.SIGNUP_SUCCESS,
  payload
})

export const signupFailed = payload => ({
  type: types.SIGNUP_FAILED,
  payload
})
