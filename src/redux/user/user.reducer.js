import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: localStorage.getItem('uid'),
    tokenExp: null,
    userDetails: {}
};

const userReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            localStorage.setItem('uid', action.payload);
            return {
                ...state,
                currentUser: localStorage.getItem('uid')
            };
        case UserActionTypes.SET_TOKEN_EXP:
            return {
                ...state,
                tokenExp: action.payload
            };    
        case UserActionTypes.SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload
            };    
        case UserActionTypes.LOGOUT:
            localStorage.removeItem('uid');
            return {
                ...state,
                currentUser: localStorage.getItem('uid')
            };
        default:
            return state;
    }
};

export default userReducer;
