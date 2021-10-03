import React from 'react';

import './Input.scss';

const Input = ({ handleChange, label, ...rest }) => {
  return (
    <div className="form__group">

      <input className="form__input" onChange={handleChange} {...rest} />

      <label htmlFor={label} className="form__label">{label}</label>
    </div>
  );
};

export default Input;
