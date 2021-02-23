import React from 'react';
import { Link } from 'react-router-dom';

import TableCard from '../../../components/TableCard/TableCard';

import './JobCard.scss';

const JobCard = ( { job } ) => {

    const {
        _id,
        job_post_url,
        point_of_contact,
        company_name,
        job_status,
        applied_date
    } = job;

    const date = new Date( applied_date ).toLocaleDateString();

    return (
        <div className="job" >
            <span>{date}</span>
            <span><Link to={`/dashboard/jobs/details/${_id}`}>{company_name}</Link></span>
            <span><Link to={job_post_url}>{point_of_contact}</Link></span>
            <span style={{ color: job_status === 'rejected' ? 'red' : 'inherit' }}>{job_status}</span>
        </div>
    );
};

export default JobCard;
