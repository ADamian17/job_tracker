import React from 'react';
import { Link } from 'react-router-dom';

import './JobCard.scss';

const JobCard = ( { job } ) => {

    const {
        _id,
        point_of_contact,
        company_name,
        job_status,
        applied_date
    } = job;

    const date = new Date( applied_date ).toLocaleDateString();

    return (
        <Link to={`/dashboard/jobs/details/${_id}`} className="job" >
            <span>{date}</span>
            <span>{company_name}</span>
            <span>{point_of_contact}</span>
            <span style={{ color: job_status === 'rejected' ? 'red' : 'inherit' }}>{job_status}</span>
        </Link>
    );
};

export default JobCard;
