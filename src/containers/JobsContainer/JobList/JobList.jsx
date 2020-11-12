import React from 'react';

import JobCard from '../JobCard/JobCard';

const JobList = ( { jobs }  ) => {

    const jobsList = jobs.map( ( job ) => <JobCard key={job._id} job={job} />);

    return jobsList;
};

export default JobList;
