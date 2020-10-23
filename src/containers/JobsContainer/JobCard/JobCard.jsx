import React from 'react';
import { Link } from 'react-router-dom';

import { truncateString } from '../../../utils/functs';

import TableCard from '../../../components/TableCard/TableCard';

import './JobCard.scss';

const JobCard = ( { job } ) => {

    const {
        _id,
        job_post_url,
        point_of_contact,
        company_name,
        job_position,
        job_status,
        applied_date
    } = job;

    const date = new Date( applied_date ).toLocaleDateString();
    console.log(job_position.length);

    return (
        <TableCard>
            <div className="col">{date}</div>
            <div className="col"><Link to={`/dashboard/jobs/details/${_id}`}>{company_name}</Link></div>
            <div className="col">{truncateString( job_position, 17)}</div>
            <div className="col"><Link to={job_post_url}>{point_of_contact}</Link></div>
            <div className="col">{job_status}</div>
            {/* <div className="tbody__container--itmen" onClick={() => props.handleDelete(_id)}><i className="far fa-trash-alt" /></div> */}
        </TableCard>
    );
};

export default JobCard;
