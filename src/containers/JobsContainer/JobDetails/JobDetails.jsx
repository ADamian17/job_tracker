import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {Button, Modal } from 'react-bootstrap';

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
    const { match, showJobDetails, jobDetails, history, showModal, setTokenExp, setShowEdit, currentUser } = props;
    const date = jobDetails ? formatDate( jobDetails.applied_date ) : '';
    const jobId = match.params.id;

    const [ error, setError ] = useState( null );
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

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
                                                <button className="btn btn-danger float-right" onClick={handleShow}>Delete</button>
                                                <button className="btn btn-success float-right mr-3" onClick={() => setShowEdit( !props.showEdit )}>Edit</button>
                                            </div>
                                        </>
                                    )
                            }

                        </div>

                        <Modal
                            show={ show }
                            onHide={ handleClose }
                            size="lg"
                            centered >

                            <Modal.Body>
                                <h4>Are you sure want to delete this job ? </h4>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={ handleClose }>Close</Button>
                                <Button variant="danger" onClick={ handleDeleteJob }>yes</Button>
                            </Modal.Footer>

                        </Modal> 
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
