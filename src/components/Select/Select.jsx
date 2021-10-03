import React, { useState } from 'react';

import ChevronDown from '../UI/Icons/ChevronDown/ChevronDown';
import ChevronUp from '../UI/Icons/ChevronUp/ChevronUp';


const Select = ({ option, setOption, options }) => {

  // for dropdown
  const [show, setShow] = useState(false);

  const handleOption = (value) => {
    setOption(value);
    setShow(!show);
  };

  return (
    <div className="select__wrapper">

      <div
        id="point_of_contact"
        className="select"
        name="point_of_contact"
        onClick={() => setShow(!show)}>
        {

          option ? <span>{option}</span> : <span>Select One ...</span>
        }

        {
          show ? <ChevronDown color={'#b5b5b5'} /> : <ChevronUp color={'#b5b5b5'} />
        }
      </div>

      <div
        className="select__options"
        style={{ display: show ? 'flex' : 'none' }} >
        {/* default option */}
        <div
          className="option"
          data-option=""
          onClick={(e) => handleOption(e.currentTarget.dataset.option, setOption)}>
          Select One ...
        </div>

        {
          options && options.map(option => (
            <div
              className="option"
              data-option={option}
              key={option}
              onClick={(e) => handleOption(e.currentTarget.dataset.option, setOption)}>
              {option}
            </div>
          ))
        }

      </div>

    </div>
  );
};

export default Select;
