import { useState } from 'react';

import Category from '../../UI/Category';

import './AsideMain.scss';

const AsideMain = () => {
  const [currentCat, setCurrentCat] = useState('all')
  const [categories, setCategories] = useState({
    all: {
      name: 'all',
      active: true
    },
    applied: {
      name: 'applied',
      active: false
    },
    response: {
      name: 'response',
      active: false
    },
    progress: {
      name: 'progress',
      active: false
    },
    rejected: {
      name: 'rejected',
      active: false
    },
    complete: {
      name: 'complete',
      active: false
    },
  });

  const setActive = (e) => {
    const selectedCat = e.target.dataset.target

    if (currentCat !== selectedCat) {
      setCategories(prevCats => {
        prevCats[currentCat].active = false;
        prevCats[selectedCat].active = true;
        return prevCats;
      });
    }

    setCurrentCat(selectedCat)
  }

  return (
    <section className="aside__main">
      {
        Object.values(categories).map(category => (
          <Category
            key={category.name}
            name={category.name}
            setActive={setActive}
            active={category.active} />
        ))
      }
    </section>
  )
}

export default AsideMain;
