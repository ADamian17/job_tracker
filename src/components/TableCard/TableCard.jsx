import React from 'react';

const TableCard = ( { children } ) => {

    return (
        <div className="card mb-4 p-2 jobs bg-dark">
            <div className="row text-center">
                { children }
            </div>
        </div>
    );
};

export default TableCard;
