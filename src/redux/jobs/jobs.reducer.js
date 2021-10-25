import JobsActionTypes from './jobs.types';

const INITIAL_STATE = {
  items: null,
  error: null
};

const jobReducer = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
    case JobsActionTypes.FETCH_JOBS_SUCCESS:
      return {
        ...state,
        items: action.payload
      };
    case JobsActionTypes.FETCH_JOBS_FAIL:
      return {
        ...state,
        error: action.payload
      };
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
