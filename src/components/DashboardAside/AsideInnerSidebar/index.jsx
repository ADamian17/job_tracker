import AsideMain from '../AsideMain';

import './AsideInnerSidebar.scss';

const AsideInnerSidebar = ({ toggle }) => {
  return (
    <div
      className={`aside__inner-sidebar ${toggle ?
        'aside__inner-sidebar--show' :
        'aside__inner-sidebar--hidden'}`}>

      <AsideMain />

      <section className="aside__footer">
        <ul className="navigation-menu__roadmap__items" id="list">

          <li className="navigation-menu__roadmap__item">
            {/* <Circle color="#F49F85" /> */}
            applied <span>3</span>
          </li>

          <li className="navigation-menu__roadmap__item">
            {/* <Circle color="#AD1FEA" /> */}
            In-Progress <span>2</span>
          </li>

          <li className="navigation-menu__roadmap__item">
            {/* <Circle color="#62BCFA" /> */}
            Rejected <span>1</span>
          </li>
        </ul>
      </section>

    </div>
  );
}

export default AsideInnerSidebar;
