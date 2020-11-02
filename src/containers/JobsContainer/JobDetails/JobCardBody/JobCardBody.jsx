import React from 'react';

import { formatDate } from '../../../../utils/functs';

const JobCardBody = ( { details } ) => {

    const { 
        job_position, 
        job_status, 
        job_post_url, 
        on_site, 
        company_name, 
        phone_screen, 
        point_of_contact, 
        applied_date } = details;

    const date = formatDate( applied_date );

    return (
        <>
            <div className="card-body">
                <p>
                    Company Name: {company_name}
                </p>

                <p>
                    Job Position: {job_position}
                </p>
                        
                <p>
                    Job Post Url: { job_post_url }
                </p>

                    
                <p>
                    On Site: {on_site}
                </p>
                <p>
                    Job Status: {job_status}
                </p>

                    
                <p>
                    Phone Screen: {phone_screen}
                </p>
                <p>
                    Point Of Contact: {point_of_contact}
                </p>

                <p>
                    applied date: { date }
                </p>         
            </div>
        </>
    );
};


export default JobCardBody;
