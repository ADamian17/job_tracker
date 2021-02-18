import React from 'react';

const JobHeaders = () => {

    const headerFields = [ 'Applied Date', 'Company Name', 'Job Post Url', 'Job Status' ];

    const headers = headerFields.map( (header, idx) => <div className="col" key={idx}>{header}</div> );

    return (
        <div className="card mb-5 p-3 bg-dark">
            <div className="row text-center">
                { headers }
            </div>
        </div>
    );
};

export default JobHeaders;
