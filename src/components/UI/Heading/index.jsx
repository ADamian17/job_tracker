import React from 'react';

import './Heading.scss';

export const Primary = ({ text }) => <h1 className='heading__primary'>{text}</h1>;

export const Secondary = ({ text }) => <h2 className='heading__secondary'>{text}</h2>;

export const Tertiary = ({ text }) => <h3 className='heading__tertiary '>{text}</h3>;

export const Quaternary = ({ text }) => <h4 className='heading__quaternary'>{text}</h4>;
