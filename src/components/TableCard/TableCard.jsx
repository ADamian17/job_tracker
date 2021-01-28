import React from 'react';

const TableCard = ( { children } ) => {

    return (
        <div className="card mb-2 jobs bg-dark">
            <div className="row text-center">
                { children }
            </div>
        </div>
    );
};

export default TableCard;
