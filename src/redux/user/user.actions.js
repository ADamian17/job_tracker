import { UserActionTypes } from './user.types';
import Auth from '../../models/auth';

export const setCurrentUser = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: UserActionTypes.SET_CURRENT_USER_START,
    });

    const user = await Auth.login(userData);
    localStorage.setItem('uid', user.data.signedJwt);
    
    dispatch({
      type: UserActionTypes.SET_CURRENT_USER_SUCCESS,
      payload: localStorage.getItem('uid')
    });

  } catch (error) {
    dispatch({
      type: UserActionTypes.SET_CURRENT_USER_ERROR,
      payload: error
    });
  }
};

export const setTokenExp = ( message ) => ({
    type: UserActionTypes.SET_TOKEN_EXP,
    payload: message
});

export const setUserDetails = ( user ) => ({
    type: UserActionTypes.SET_USER_DETAILS,
    payload: user
});

export const logout = () => ({
    type: UserActionTypes.LOGOUT
});
