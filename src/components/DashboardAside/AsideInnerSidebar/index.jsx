import './AsideInnerSidebar.scss';

const AsideInnerSidebar = ({ toggle }) => {
  return (
    <div
      className={`aside__inner-sidebar ${toggle ?
          'aside__inner-sidebar--show' :
          'aside__inner-sidebar--hidden'}`}>

      <section className="aside__main">
        <div className="pill pill__active">All</div>
        <div className="pill">UI</div>
        <div className="pill">UX</div>
        <div className="pill">Enhancement</div>
        <div className="pill">Bug</div>
        <div className="pill">Feature</div>
      </section>

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
