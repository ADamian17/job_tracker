import './Dashboard.scss';

import DashboardAside from '../../components/DashboardAside';

const NewDash = () => {
  return (
    <div className="main-padding">
      <section className="new-dashboard">

        <DashboardAside />

        <main className="main">

          <div className="main__banner">
            banner
          </div>

          <section className="main__jobs">

            <article className="main__job">
              job info
            </article>

            <article className="main__job">
              job info
            </article>

            <article className="main__job">
              job info
            </article>

            <article className="main__job">
              job info
            </article>

            <article className="main__job">
              job info
            </article>

            <article className="main__job">
              job info
            </article>

            <article className="main__job">
              job info
            </article>
            <article className="main__job">
              job info
            </article>
            <article className="main__job">
              job info
            </article>
            <article className="main__job">
              job info
            </article>

          </section>

        </main>
      </section>
    </div>
  )
}

export default NewDash;
