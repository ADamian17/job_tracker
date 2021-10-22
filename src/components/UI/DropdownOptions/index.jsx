import { useRef } from 'react';

import IconCheck from '../Icons/IconCheck';

const DropdownOptions = ({ options, show, setCurrent, ...rest }) => {
  const ref = useRef(null);

  return (
    <div
      {...rest}
      id="dropdown-options"
      className={`dropdown__items dropdown__items${show ? '--show' : '--hidde'}`}>
      {
        options.map(option => {
          return (
            <div
              key={option.name}
              ref={ref}
              data-target={option.name}
              data-value={option.value}
              onClick={(e) => setCurrent(e)}
              className={`dropdown__item ${option.current ? 'dropdown__item--current' : ''}`}>
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
