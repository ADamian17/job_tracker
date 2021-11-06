import { useEffect } from 'react';

// NOTE Reduxs
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../redux/jobs/jobs.actions';
import { jobsItems } from '../../redux/jobs/jobs.selector';

import DashboardAside from '../../components/DashboardAside';

import './JobContainer.scss';

const JobsContainer = (props) => {

  const dispatch = useDispatch();
  const jobs = useSelector(jobsItems);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
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
  );
};

export default JobsContainer;
