import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// NOTE REDUX
import { connect } from 'react-redux';
import { showModal } from '../../../redux/modal/modal.action';
import { setShowEdit } from '../../../redux/form/form.actions';
import { setTokenExp } from '../../../redux/user/user.actions';

import Job from '../../../models/Job';
import { formatDate } from '../../../utils/functs';

import JobCardBody from './JobCardBody/JobCardBody';
import JobEdit from '../jobEdit/JobEdit';

import './JobDetails.scss';

const JobDetails = ( props ) => {

    const { 
        match, 
        history, 
        setShowEdit, 
        currentUser 
    } = props;

    const [ jobDetails, setJobDetails ] = useState({});

    const date = jobDetails ? formatDate( jobDetails.applied_date ) : '';
    const jobId = match.params.id;

    const [ error, setError ] = useState( null );
    const [show, setShow] = useState(false);

    
    useEffect( () => {

        getJobDetails();

    }, []);

    const getJobDetails = async () => {

        try {
            const job = await Job.getJobDetails( currentUser, jobId );

            const { data } = job.data; 
            setJobDetails(data);

        } catch (error) {

            setError( error.response );

        }
    };

    const handleDeleteJob = async () => {

        try {
            await Job.deleteJob( currentUser, jobId );
            history.push('/dashboard/jobs');

        } catch (error) {
            return console.log(error);
        }
    };
    

    console.log(error);
    return (
        <> 
            {
                jobDetails && (
                    <>
                        <div className="job-details dark-bg">
                            <div className="primary__heading primary__heading--light">
                                <p>
                                    applied date: { date }
                                </p> 
                            </div>

                            {
                                props.showEdit ? 
                                    (
                                        <JobEdit details={ jobDetails } jobId={jobId} setJobDetails={setJobDetails} />
                                    ) : 
                                    ( 
                                        <>
                                            <JobCardBody details={ jobDetails } /> 

                                            <div className="btn-group btn-group--start">
                                                <button className="btn btn-danger" onClick={() => setShow( true ) }>Delete</button>
                                                <button className="btn btn-success" onClick={() => setShowEdit( !props.showEdit )}>Edit Job</button>
                                            </div>
                                        </>
                                    )
                            }

                        </div>

                        <div 
                            className="modal"
                            style={{ display: show ? 'flex' : 'none' }}>
                            <div className="modal__bg" onClick={ () => setShow( false ) }/>

                            <div className="modal__main modal__main--small">
                                <h4>Are you sure want to delete this job ? </h4>

                                <div className="btn-group btn-group--small" >
                                    <button className="btn btn-secondary" onClick={ () => setShow( false ) }>Close</button>
                                    <button className="btn btn-danger" onClick={ handleDeleteJob }>Yes</button>
                                </div>
                            </div>

                        </div> 
                    </>
                )

            }
        </>    
    );
};


const mapStateToProps = state => ({
    jobDetails: state.jobs.jobDetails,
    currentUser: state.user.currentUser,
    showEdit: state.form.showEdit 
});

const mapDispatchToProps = dispatch => ({
    showModal: () => dispatch( showModal() ),
    setTokenExp:  (boolean) => dispatch( setTokenExp( boolean ) ),
    setShowEdit: () => dispatch( setShowEdit() )
});


const job = withRouter(JobDetails);
export default connect( mapStateToProps, mapDispatchToProps )(job);
