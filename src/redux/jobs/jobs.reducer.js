import { JobsActionTypes } from './jobs.types';

const INITIAL_STATE = {
    jobsList: [],
    jobDetails: {}
};

const jobReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case JobsActionTypes.GET_JOBS:
            return {
                ...state,
                jobsList: action.payload
            };
        case JobsActionTypes.SHOW_JOB_DETAILS:
            return {
                ...state,
                jobDetails: action.payload
            };   
        default:
            return state;
    }
};

export default jobReducer;
