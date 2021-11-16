import { useEffect, useState } from 'react';

import AsideHeader from './AsideHeader';
import AsideInnerSidebar from './AsideInnerSidebar';

import './DashboardAside.scss';

const DashboardAside = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleCloseSidebar = (e) => {
      if (toggle && !e.target.classList.contains('arrow')) {
        setToggle(!toggle)
      }
    }

    document.addEventListener('click', handleCloseSidebar);

    return () => {
      document.removeEventListener('click', handleCloseSidebar)
    }
  }, [toggle]);

  return (
    <aside className="aside">
      <AsideHeader toggle={toggle} setToggle={setToggle} />
      <AsideInnerSidebar toggle={toggle} />
    </aside>
  );
}

export default DashboardAside;
