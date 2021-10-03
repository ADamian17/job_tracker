import React from 'react';
import './TableCard.scss';

const TableCard = ({ children }) => {

  return (
    <div className="card p-2 jobs bg-dark">
      {children}
    </div>
  );
};

export default TableCard;
