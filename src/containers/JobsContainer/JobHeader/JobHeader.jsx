import React from 'react';

import './JobHeader.scss';
const JobHeaders = () => {

    const headerFields = [ 'Applied Date', 'Company Name', 'Point of Contact', 'Job Status' ];

    const headers = headerFields.map( (header, idx) => <span key={idx}>{header}</span> );

    return headers;
};

export default JobHeaders;
