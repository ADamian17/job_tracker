import React, { useEffect, useState } from 'react';
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

const JobsContainer = ( props ) => {

    const [ error, setError ] = useState( null );

    useEffect( () => {
        getJobData();
    }, []);

    // NOTE Get all job
    const getJobData = async ( query ) => {
        
        const { currentUser, getJobs } = props;
       
        try {
            let jobs = null;

            if ( query ) {
                jobs = await Job.getAllJobs( currentUser, query );
                console.log( jobs.data.jobs );
            } else {
                jobs = await Job.getAllJobs( currentUser );
                console.log( jobs.data.jobs );
            }

            getJobs(jobs.data.jobs);

        } catch ( error ) {
            setError( error ); 
        }
    };
    
    const { jobs } = props;
    console.log(error);
    return (
        <>  
            <section className="filter__section">
                <h3  className="filter__section__header">Filter By Status</h3>

                <div className="btn-group">
                    <button
                        onClick={ () => getJobData('applied') } 
                        className="btn btn-secondary">Applied</button>
                    <button
                        onClick={ () => getJobData('no response') } 
                        className="btn btn-info">No Response</button>
                    <button
                        onClick={ () => getJobData('in progress') } 
                        className="btn btn-warning">In Progress</button>
                    <button
                        onClick={ () => getJobData('rejected') } 
                        className="btn btn-danger">Rejected</button>
                    <button
                        onClick={ () => getJobData('complete') } 
                        className="btn btn-success">Complete</button>
                    <button
                        onClick={ () => getJobData() } 
                        className="btn btn-primary">reset</button>
                </div>

            </section> 

            <div className="table">

                {/* NOTE  Table header */}
                <div className="table__header">
                    <JobHeader /> 
                </div>

                <div className="table__body">
                    {
                        jobs && (
                      
                            jobs.length !== 0 ? (
                                <JobList jobs={jobs} />
                        
                            )  : (
                                ''
                            )
                        )
                    } 
                </div>

                <div className="table__footer">
                    count: { jobs && jobs.length }
                </div>
            </div>
        </>      
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
