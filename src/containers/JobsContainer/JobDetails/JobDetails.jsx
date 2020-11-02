import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

// NOTE REDUX
import { connect } from 'react-redux';
import { showJobDetails } from '../../../redux/jobs/jobs.actions';
import { showModal } from '../../../redux/modal/modal.action';

import Job from '../../../models/Job';

import JobCardBody from './JobCardBody/JobCardBody';
import Modal from '../../../components/UI/Modal/Modal';

const JobDetails = ( props ) => {
    const { match, showJobDetails, jobDetails, history, showModal } = props;

    const jobId = match.params.id;

    useEffect( () => {

        getJobDetails();

    }, []);

    console.log('details page props:', props);

    const getJobDetails = async () => {

        try {
            const jobDetails = await Job.getJobDetails( jobId );

            const { data } = jobDetails.data; 
            showJobDetails(data);

        } catch (error) {

            return error;
        }
    };

    return (
        <> 
            {
                jobDetails && (
                    <>
                        <div className="card">

                            <JobCardBody details={ jobDetails } />

                            <div className="card-footer">
                                <button className="btn btn-success float-right" onClick={showModal}>Delete</button>
                                <button className="btn btn-primary float-right mr-3">Edit</button>
                            </div>

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
    currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
    showJobDetails: ( job ) => dispatch(showJobDetails( job )),
    showModal: () => dispatch( showModal() )
});


const job = withRouter(JobDetails);
export default connect( mapStateToProps, mapDispatchToProps )(job);


// {/* <div>
// <button>
// <Link to={`/dashboard/jobs/edit/${id}`}>Edit</Link>
// </button>
// <button basic color="red" onClick={() => this.handleDeleteJob( id ) }>
// Delete
// </button>
// </div> */}
