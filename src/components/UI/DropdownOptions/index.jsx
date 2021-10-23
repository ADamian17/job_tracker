import { useRef } from 'react';

import IconCheck from '../Icons/Check-icon/IconCheck';

import './DropdownOptions.scss';

const DropdownOptions = ({ options, show, setCurrent, ...rest }) => {
  const ref = useRef(null);

  return (
    <div
      {...rest}
      id="dropdown-options"
      className={`options options${show ? '--show' : '--hidde'}`}>
      {
        options.map(option => {
          return (
            <div
              key={option.name}
              ref={ref}
              data-target={option.name}
              data-value={option.value}
              onClick={(e) => setCurrent(e)}
              className={`options__item ${option.current ? 'options__item--current' : ''}`}>
              {
                option.current ?
                  <>
                    {option.name} <IconCheck />
                  </> :
                  <>
                    {option.name}
                  </>
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default DropdownOptions;
