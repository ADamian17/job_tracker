import { createSelector } from 'reselect';

const jobsSelector = (state) => state.jobs.items;

export const jobsItems = createSelector(
  [jobsSelector],
  (jobs) => jobs
) 

export const jobsByStatus = createSelector(
  [jobsSelector],
  (jobs) => {    
    const availableStatus = {
      applied: {
        name: 'applied',
        color: '#F49F85',
        count: 0
      },
      response: {
        name: 'response',
        color: '#AD1FEA',
        count: 0
      },
      'in progress': {
        name: 'in progress',
        color: '#62BCFA',
        count: 0
      },
      rejected: {
        name: 'rejected',
        color: '#de3b58',
        count: 0
      },
      complete: {
        name: 'complete',
        color: '#0deb2b',
        count: 0
      },
    }
    const jobsStatus = jobs?.reduce((acc, job) => {
      acc[job.job_status].count += 1
      return acc;
    }, availableStatus);
    return jobsStatus;
  } 
)