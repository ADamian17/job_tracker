import AsideMain from '../AsideMain';
import AsideFooter from '../AsideFooter';

import './AsideInnerSidebar.scss';

const AsideInnerSidebar = ({ toggle }) => {
  return (
    <div
      className={`aside__inner-sidebar ${toggle ?
        'aside__inner-sidebar--show' :
        'aside__inner-sidebar--hidden'}`}>

      <AsideMain />

      <AsideFooter />
    </div>
  );
}

export default AsideInnerSidebar;
