import { useEffect, useState } from 'react';

import IconArrowDown from '../Icons/ChevronDown/IconArrowDown';
import IconArrowUp from '../Icons/ChevronUp/IconArrowUp';
import IconCheck from '../Icons/Check-icon/IconCheck';

const Select = ({ currentCategory, dropOptions, setDefaultOption, ...rest }) => {
  const [show, setShow] = useState(false)
  const [currentOption, setCurrentOption] = useState(currentCategory)

  const handleCloseDropdown = (e) => {
    if (show) {
      setShow(!show)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleCloseDropdown);
    return () => {
      document.removeEventListener('click', handleCloseDropdown)
    }
  }, [show, currentOption]);

  const handleClick = (e) => {
    setCurrentOption(e.target.dataset.value)
    setDefaultOption(e.target.dataset.value)
  }

  return (
    <div className="select">
      <div
        className="select__input"
        onClick={() => setShow(!show)}>
        <p>{currentCategory}</p>
        {
          show ? <IconArrowUp /> : <IconArrowDown />
        }
      </div>

      <div
        className={`options options${show ? '--show' : '--hidde'}`}>

        {
          dropOptions.map(option => (
            <div
              key={option}
              data-value={option}
              onClick={handleClick}
              className={`categories__item ${option === currentOption ? 'categories__item--current' : ''}`}>
              <span>{option}</span>
              {option === currentOption ? <IconCheck /> : ''}
            </div>
          ))
        }

      </div>
    </div>
  )
};

export default Select;
