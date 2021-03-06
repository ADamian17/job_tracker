import React from 'react';

import './JobCardBody.scss';

const JobCardBody = ( { details } ) => {
    console.log(details);

    const { 
        job_position, 
        job_status, 
        job_post_url, 
        on_site, 
        company_name, 
        phone_screen, 
        point_of_contact } = details;

    return (
        <section className="job-details__body">

            {/* r-1  */}
            <div className="row">

                <div className="col">
                    <p className="fields">
                        Company Name: {company_name}
                    </p>
                </div>

                <div className="col">
                    <p className="fields"> 
                        Job Position: {job_position}
                    </p>
                </div>


            </div>

            {/* r-2 */}

            <div className="row">
                {/* justify-self-start */}
                <p className="fields">
                    Job Post Url: <a className="job_post_url" href={ job_post_url } target="blank">{ job_post_url }</a>
                </p>
            </div>


            {/* r-3 */}

            <div className="row">

                <div className="col">

                    <p className="fields">
                        On Site: {on_site}
                    </p>
                </div>

                <div className="col">
                    <p className="fields">
                        Job Status: {job_status}
                    </p>
                </div>


            </div>

            {/* r-4 */}

            <div className="row">
                <div className="col">

                    <p className="fields">
                        Phone Screen: {phone_screen}
                    </p>
                </div>

                <div className="col">

                    <p className="fields">
                        Point Of Contact: {point_of_contact}
                    </p>
                </div>

            </div>

        </section>
    );
};


export default JobCardBody;
