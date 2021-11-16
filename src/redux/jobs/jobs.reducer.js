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
    case JobsActionTypes.RESET_JOBS_SUCCESS:
      return {
        ...state,
        items: null,
        error: null
      };   
    default:
      return state;
  }
};

export default jobReducer;
