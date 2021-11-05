import { Link, useRouteMatch } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { jobsByStatus } from '../../../redux/jobs/jobs.selector';

import { Tertiary } from '../../UI/Heading';
import Circle from '../../UI/Icons/Circle/Circle';

import './AsideFooter.scss';

const AsideFooter = () => {
  const { path } = useRouteMatch();
  console.log({path});
  const jobsStatusCount = useSelector(jobsByStatus);

  return (
    <section className="aside__footer">

      {/* <ul className="navigation-menu__roadmap__items" id="list">
        {
          jobsStatusCount && Object.values(jobsStatusCount).map((status, idx) => (
            <li
              key={`${status.name}-${idx}`}
              className="navigation-menu__roadmap__item">
              <Circle color={status.color} />
              {status.name} <span>{status.count}</span>
            </li>
          ))
        }
      </ul> */}

      <div className="aside__footer__item">
        <Tertiary text="Profile" />

        <Link to={`${path}/profile`}>
          <span>View</span>
        </Link>
      </div>

      <div className="aside__footer__item">
        <Tertiary text="Logout" />
      </div>

    </section>
  )
}

export default AsideFooter;
