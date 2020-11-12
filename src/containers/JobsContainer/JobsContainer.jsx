import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// NOTE Reduxs
import { connect } from 'react-redux';
import { getJobs } from '../../redux/jobs/jobs.actions';
import { showModal } from '../../redux/modal/modal.action';
// import { setTokenExp } from '../../redux/user/user.actions';

import Job from '../../models/Job';

import JobHeader from './JobHeader/JobHeader';
import JobList from './JobList/JobList';

import './JobContainer.scss';

class JobsContainer extends Component {

    state = {
        error: null
    };

    componentDidMount() {
        this.handleJobData();
    }

    // NOTE Get all job
    handleJobData = async () => {
        const { currentUser, getJobs } = this.props;
       
        try {
            const jobs = await Job.getAllJobs( currentUser );
            getJobs(jobs.data.data);

        } catch (error) {
            this.setState({
                error: error
            });
        }
    };


    // NOTE Hanlde Add Job
    handleAddJob = async (event, state) => {
        event.preventDefault();
        const currentUser = this.props.currentUser;

        try {
            const new_job = await Job.addJob(currentUser, state);

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
    
    
    render() { 
        const { jobs } = this.props;
        console.log('job container error', this.state.error);

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
                        jobs && (
                      
                            jobs.length !== 0 ? (
                                <>
                                    <JobList jobs={jobs} />
                                </> 
                            )  : (
                                <>
                                    <p>Jobs added: { jobs.length }</p>
                                </>
                            )

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
