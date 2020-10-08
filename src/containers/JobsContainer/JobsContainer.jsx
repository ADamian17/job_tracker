import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { getJobs } from '../../redux/jobs/jobs.actions';
import { showModal } from '../../redux/modal/modal.action';

import Job from '../../models/Job';

// import NewJob from '../../components/NewJob/NewJob';
// import MyModal from '../../components/Modal/MyModal';
// import TBody from '../../components/Table/Body/TBody';
// import THeaders from '../../components/Table/Headers/THeaders';
// import JobFooter from '../../components/JobTable/JobFooter/JobFooter';

// import './JobContainer.scss';

class JobsContainer extends Component {

    state = {
        error: null,
        activeItem: 'home'
    };

    componentDidMount() {
        this.handleJobData();
    }

    // NOTE Get all job
    handleJobData = async () => {
        const { currentUser, getJobs } = this.props;
       
        try {
            const jobs = await Job.getJobData( currentUser );
            getJobs(jobs.data.data);

        } catch (error) {
            return console.log(error);
        }
    };


    // NOTE Hanlde Add Job
    handleAddJob = async (event, state) => {
        event.preventDefault();
        const currentUser = this.props.currentUser;

        try {
            const new_job = await Job.addJob(currentUser, state);
            console.log(new_job);

            if (new_job) {
                this.getJobData();
                showModal();
            }

        } catch (error) {
            this.setState({
                error: error
            });
        }
    }


    // NOTE get job details
    handleDeleteJob = async ( id ) => {
        const currentUser = this.props.currentUser;
        try {
            const deletedJob = await Job.deleteJob( currentUser, id );

            if ( deletedJob ) {
                this.handleJobData();
            }

        } catch (error) {
            return error;
        }
    }
    
    render() { 
        // console.log(this.props);
        // eslint-disable-next-line no-unused-vars
        const { jobs, showJobDetails, showModal } = this.props;
        // const TableRows = jobs.map((items) => <TBody jobs={items} key={items._id} showJobDetails={showJobDetails} handleDelete={this.handleDeleteJob} />);
        const jobsLength = jobs.length;

        return (
            <> 
                {/* <div className="search-container">
                    search container
                </div> */}
                    
                <div className="table">

                    <div className="add-job">
                        {/* <p>Count: {jobsLength}</p> */}
                        {/* <!-- Button trigger modal --> */}
                        <button variant="link" onClick={() => showModal() }>
                            add job
                        </button>
                    </div>

                    {/* NOTE  Table header */}
                    <div className="table__header">
                        {/* <THeaders /> */}
                    </div>

                    <div className="table__body">
                        {
                            jobsLength !== 0 ? (
                                <div>
                                    {/* {TableRows} */}
                                </div>  
                            )  : (
                                <div>
                                    <p>Jobs added: {jobsLength}</p>
                                </div>
                            )
                        }

                    </div>
                </div>  
            </>
        );
    }
}

const mapStateToProps = state => ({
    jobs: state.jobs.jobsList,
    currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
    getJobs: (jobs) => dispatch(getJobs(jobs)),
    showModal: () => dispatch(showModal())
});


const Jobs = withRouter( JobsContainer );

export default connect( mapStateToProps, mapDispatchToProps )(Jobs);
