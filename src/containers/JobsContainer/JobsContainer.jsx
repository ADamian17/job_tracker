import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// NOTE Reduxs
import { connect } from 'react-redux';
import { getJobs } from '../../redux/jobs/jobs.actions';
import { showModal } from '../../redux/modal/modal.action';

import Job from '../../models/Job';

import JobHeader from './JobHeader/JobHeader';
import JobList from './JobList/JobList';

import './JobContainer.scss';

const JobsContainer = ( props ) => {

    const [ error, setError ] = useState( null );
    const { currentUser, getJobs } = props;

    useEffect( () => {
        handleJobData();
    }, []); 

    // NOTE Get all job
    const handleJobData = async () => {
       
        try {
            const jobs = await Job.getAllJobs( currentUser );
            getJobs(jobs.data.data);

        } catch (error) {
            setError( error.response.data );
        }
    };


    // NOTE Hanlde Add Job
    // const handleAddJob = async (event, state) => {
    //     event.preventDefault();
    //     const currentUser = this.props.currentUser;

    //     try {
    //         const new_job = await Job.addJob(currentUser, state);
    //         console.log(new_job);

    //         if (new_job) {
    //             this.getJobData();
    //             showModal();
    //         }

    //     } catch (error) {
    //         this.setState({
    //             error: error
    //         });
    //     }
    // };
    
    
    const { jobs } = props;
    const jobsLength = jobs.length;
    console.log('state:', error);

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
                        jobsLength !== 0 ? (
                            <>
                                <JobList jobs={jobs} />
                            </> 
                        )  : (
                            <>
                                <p>Jobs added: { jobsLength }</p>
                            </>
                        )
                    )
                } 

            </div>
        </div>  
    );
    
};

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
