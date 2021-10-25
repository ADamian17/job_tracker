import Job from '../../models/Job';

import JobsActionTypes from './jobs.types';

/* == NOTE Get all job == */
export const fetchJobs = ( query ) => {
  return async (dispatch, getState) => {
    try {
      const { currentUser } = getState().user;
      dispatch({ type: JobsActionTypes.FETCH_JOBS_START });

      let jobs = null;
      if ( query && query !== 'all' ) {
        jobs = await Job.getAllJobs( currentUser, query );
      } else {
        jobs = await Job.getAllJobs( currentUser );
      }

      dispatch({
        type: JobsActionTypes.FETCH_JOBS_SUCCESS,
        payload: jobs.data.jobs
      });

    } catch (error) {
      console.log(error);
      dispatch({
        type: JobsActionTypes.FETCH_JOBS_FAIL,
        payload: error
      });
    }
  };
}

export const getJobs = () => ( jobs ) => ({
    type: JobsActionTypes.GET_JOBS,
    payload: jobs
});

export const showJobDetails = ( job ) => ({
    type: JobsActionTypes.SHOW_JOB_DETAILS,
    payload: job
});
