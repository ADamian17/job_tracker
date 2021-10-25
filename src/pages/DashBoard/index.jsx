import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../redux/jobs/jobs.actions';

import DashboardAside from '../../components/DashboardAside';

import './Dashboard.scss';

const Dashboard = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(({ jobs }) => jobs.items);

  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch]);

  return (
    <div className="main-padding">
      <section className="new-dashboard">

        <DashboardAside />

        <main className="main">
          <div className="main__banner">
            banner
          </div>

          <section className="main__jobs">
            {
              jobs && jobs.map(job => (
                <article
                  key={job._id}
                  className="main__job">
                  job info
                </article>
              ))
            }
          </section>

        </main>
      </section>
    </div>
  )
}

export default Dashboard;
