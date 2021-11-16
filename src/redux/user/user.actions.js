import { UserActionTypes } from './user.types';
import JobsActionTypes from '../jobs/jobs.types';

import Auth from '../../models/auth';

export const setCurrentUser = (token) => async (dispatch) => {
  try {
    dispatch({
      type: UserActionTypes.SET_CURRENT_USER_START,
    });

    localStorage.setItem('uid', token);
    const currentUser = localStorage.getItem('uid')

    dispatch({
      type: UserActionTypes.SET_CURRENT_USER_SUCCESS,
      payload: currentUser
    });

  } catch (error) {
    dispatch({
      type: UserActionTypes.SET_CURRENT_USER_ERROR,
      payload: error
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: UserActionTypes.LOGOUT_START
  });
  localStorage.removeItem('uid');
  dispatch({
    type: JobsActionTypes.RESET_JOBS_SUCCESS
  });
  dispatch({
    type: UserActionTypes.LOGOUT_SUCCESS
  });
};
