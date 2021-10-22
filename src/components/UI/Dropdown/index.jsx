import { useEffect, useState } from 'react';

import IconArrowUp from '../Icons/IconArrowUp';
import IconArrowDown from '../Icons/IconArrowDown';

import DropdownOptions from '../DropdownOptions';

import './Dropdown.scss';

const Dropdown = () => {
  const [show, setShow] = useState(false)

  const [currentOption, setCurrentOption] = useState('most upvotes')

  const [options, setOptions] = useState({
    'most upvotes': {
      name: 'most upvotes',
      value: 'most upvotes',
      current: true,
    },
    'least upvotes': {
      name: 'least upvotes',
      value: 'least upvotes',
      current: false,
    },
    'most comments': {
      name: 'most comments',
      value: 'most comments',
      current: false,
    },
    'least comments': {
      name: 'least comments',
      value: 'least comments',
      current: false,
    },
  });

  const handleCloseDropdown = () => {
    if (show) {
      setShow(!show)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleCloseDropdown);

    return () => {
      document.removeEventListener('click', handleCloseDropdown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  const setCurrent = (e) => {
    const selectedOption = e.target.dataset.target
    if (currentOption !== selectedOption) {
      setOptions(prevOptions => {
        prevOptions[currentOption].current = false;
        prevOptions[selectedOption].current = true;
        return prevOptions;
      });

      setCurrentOption(selectedOption);
    }
  }

  return (
    <div className="dropdown">
      <div
        onClick={() => setShow(!show)}
        className={`dropdown__trigger  dropdown__trigger${show ? '--grey' : ''}`}>
        <p>Sort by: <span>{options[currentOption].name}</span></p>
        {
          show ? <IconArrowUp /> : <IconArrowDown />
        }
      </div>
      <DropdownOptions
        show={show}
        options={Object.values(options)}
        setCurrent={setCurrent} />
    </div>
  )
}

export default Dropdown;
