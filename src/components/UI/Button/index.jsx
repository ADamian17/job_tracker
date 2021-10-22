import React from 'react';
import ChevronLeft from '../Icons/ChevronLeft';

import './Button.scss';

const Button = ({ text, varient, ...rest }) => (
  <button className={`btn btn__${varient}`} {...rest}>
    {varient === 'go-back' || varient === 'go-back--dark' ?
      <>
        <ChevronLeft /> {text}
      </> :
      <>
        {text}
      </>
    }
  </button>
);

export default Button;
