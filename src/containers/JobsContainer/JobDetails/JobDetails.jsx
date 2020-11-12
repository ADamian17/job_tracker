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
import Modal from '../../../components/UI/Modal/Modal';

import './JobDetails.scss';

const JobDetails = ( props ) => {
    const { match, showJobDetails, jobDetails, history, showModal, setTokenExp, setShowEdit } = props;
    const [ error, setError ] = useState( null );
    const date = jobDetails ? formatDate( jobDetails.applied_date ) : '';

    const jobId = match.params.id;

    useEffect( () => {

        getJobDetails();

    }, []);

    const getJobDetails = async () => {

        try {
            const jobDetails = await Job.getJobDetails( jobId );

            const { data } = jobDetails.data; 
            showJobDetails(data);

        } catch (error) {

            setError( error.response );

            setTokenExp( true );
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
                                                <button className="btn btn-danger float-right" onClick={showModal}>Delete</button>
                                                <button className="btn btn-primary float-right mr-3" onClick={() => setShowEdit( !props.showEdit )}>Edit</button>
                                            </div>
                                        </>
                                    )
                            }

                        </div>

                        <Modal history={history} jobId={jobId} />
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
