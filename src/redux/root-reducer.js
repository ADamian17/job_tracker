import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import jobReducer from './jobs/jobs.reducer';
import modalReducer from './modal/modal.reducer';

export default combineReducers({
    user: userReducer,
    jobs: jobReducer,
    modal: modalReducer
});
