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
        <TableCard>
            <div className="col">{date}</div>
            <div className="col"><Link to={`/dashboard/jobs/details/${_id}`}>{company_name}</Link></div>
            <div className="col"><Link to={job_post_url}>{point_of_contact}</Link></div>
            <div className="col">{job_status}</div>
        </TableCard>
    );
};

export default JobCard;
