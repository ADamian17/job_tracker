import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// NOTE REDUX
import { connect } from 'react-redux';
import { showJobDetails } from '../../../redux/jobs/jobs.actions';
import { showModal } from '../../../redux/modal/modal.action';
import { setShowEdit } from '../../../redux/form/form.actions';
import { setTokenExp } from '../../../redux/user/user.actions';

import Job from '../../../models/Job';
import { formatDate } from '../../../utils/functs';

import JobCardBody from './JobCardBody/JobCardBody';
import JobEdit from '../jobEdit/JobEdit';
// import Modal from '../../../components/UI/Modal/Modal';

import './JobDetails.scss';

const JobDetails = ( props ) => {
    const { 
        match, 
        showJobDetails, 
        jobDetails, 
        history, 
        setTokenExp, 
        setShowEdit, 
        currentUser 
    } = props;

    const date = jobDetails ? formatDate( jobDetails.applied_date ) : '';
    const jobId = match.params.id;

    const [ error, setError ] = useState( null );
    const [show, setShow] = useState(false);
    

    useEffect( () => {

        getJobDetails();

    }, []);

    const getJobDetails = async () => {

        try {
            const jobDetails = await Job.getJobDetails( currentUser, jobId );

            const { data } = jobDetails.data; 
            showJobDetails(data);

        } catch (error) {

            setError( error.response );

            setTokenExp( true );
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
                        <div className="card main-bg-card">
                            <div className="card-header">
                                <p className="text-center m-0 fields">
                                    applied date: { date }
                                </p> 
                            </div>

                            {
                                props.showEdit ? 
                                    (
                                        <JobEdit details={ jobDetails } jobId={jobId} />
                                    ) : 
                                    ( 
                                        <>
                                            <JobCardBody details={ jobDetails } /> 
                                            <div className="card-footer p-3">
                                                <button className="btn btn-success float-right mr-3" onClick={() => setShowEdit( !props.showEdit )}>Edit</button>
                                                <button className="btn btn-danger float-right" onClick={() => setShow( true ) }>Delete</button>
                                            </div>
                                        </>
                                    )
                            }

                        </div>

                        <div 
                            className="modal__backdrop"
                            style={{ display: show ? 'flex' : 'none' }} 
                            onClick={ () => setShow( false ) }>

                            <div className="modal">
                                <h4>Are you sure want to delete this job ? </h4>

                                <div className="modal__footer" >
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
    showJobDetails: ( job ) => dispatch(showJobDetails( job )),
    showModal: () => dispatch( showModal() ),
    setTokenExp:  (boolean) => dispatch( setTokenExp( boolean ) ),
    setShowEdit: () => dispatch( setShowEdit() )
});


const job = withRouter(JobDetails);
export default connect( mapStateToProps, mapDispatchToProps )(job);
