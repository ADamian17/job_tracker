import { JobsActionTypes } from './jobs.types';

export const getJobs = ( jobs ) => ({
    type: JobsActionTypes.GET_JOBS,
    payload: jobs
});

export const showJobDetails = ( job ) => ({
    type: JobsActionTypes.SHOW_JOB_DETAILS,
    payload: job
});
