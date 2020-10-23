import React from 'react';

import TableCard from '../../../components/TableCard/TableCard';

const JobHeaders = () => {

    const headerFields = [ 'Applied Date', 'Company Name', 'Job Position', 'Job Post Url', 'Job Status' ];

    const headers = headerFields.map( (header, idx) => <div className="col" key={idx}>{header}</div> );

    return (
        <TableCard>
            { headers }
        </TableCard>
    );
};

export default JobHeaders;
