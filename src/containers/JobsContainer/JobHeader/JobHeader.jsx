import React from 'react';

import './JobHeader.scss';
const JobHeaders = () => {

    const headerFields = [ 'Applied Date', 'Company Name', 'Job Post Url', 'Job Status' ];

    const headers = headerFields.map( (header, idx) => <span className="col" key={idx}>{header}</span> );

    return headers;
};

export default JobHeaders;
