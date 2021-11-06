import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { fetchJobs } from '../../../redux/jobs/jobs.actions';

import Category from '../../UI/Category';

import './AsideMain.scss';

const AsideMain = () => {
  const dispatch = useDispatch();

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
    'in progress': {
      name: 'in progress',
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
      dispatch(fetchJobs(selectedCat))
    }

    setCurrentCat(selectedCat)
  }

  return (
    <section className="aside__main">
      <h2 className="aside__main__title">filter by Status</h2>

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