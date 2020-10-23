import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { getJobs } from '../../redux/jobs/jobs.actions';
import { showModal } from '../../redux/modal/modal.action';

import Job from '../../models/Job';

import JobHeader from './JobHeader/JobHeader';
import JobList from './JobList/JobList';

import './JobContainer.scss';

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
        const { jobs } = this.props;
        const jobsLength = jobs.length;

        return (     
            <div className="table p-4 rounded">

                {/* NOTE  Table header */}
                <div className="row">
                    <div className="col table__header">
                        <JobHeader />
                    </div>
                </div>

                <div className="table__body">
                    {
                        jobsLength !== 0 ? (
                            <>
                                <JobList jobs={jobs} />
                            </> 
                        )  : (
                            <>
                                <p>Jobs added: { jobsLength }</p>
                            </>
                        )
                    }

                </div>
            </div>  
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
