import * as actions from './App.actions';


export const logout = () => dispatch => {
  return dispatch(actions.logout());
};
