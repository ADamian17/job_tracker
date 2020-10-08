import { UserActionTypes } from './user.types';

export const setCurrentUser = ( token ) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: token
});

export const setTokenExp = ( token ) => ({
    type: UserActionTypes.SET_TOKEN_EXP,
    payload: token
});

export const setUserDetails = ( user ) => ({
    type: UserActionTypes.SET_USER_DETAILS,
    payload: user
});

export const logout = () => ({
    type: UserActionTypes.LOGOUT
});
