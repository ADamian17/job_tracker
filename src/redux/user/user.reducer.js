import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: localStorage.getItem('uid'),
  error: null,
};

const userReducer = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER_SUCCESS: 
      return {
        ...state,
        currentUser: action.payload,
        error: null
      } 
    case UserActionTypes.LOGOUT_ERROR: 
    case UserActionTypes.SET_CURRENT_USER_ERROR: 
      return {
        ...state,
        error: action.payload
      }
    case UserActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: localStorage.getItem('uid'),
        error: null
      }
    default:
      return state;
  }
};

export default userReducer;
