import React from 'react';

import './Paragraph.scss';

const Paragraph = ({ children, otherClasses }) => (
  <p className={`paragraph ${otherClasses}`}>
    {children}
  </p>
);

export default Paragraph;
