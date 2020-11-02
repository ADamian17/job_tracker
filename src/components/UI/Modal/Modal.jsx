import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { showModal } from '../../../redux/modal/modal.action';

import Job from '../../../models/Job';

const QuestionModal = ( props ) => {

    const { history, jobId } = props;

    const handleDeleteJob = async ( id ) => {

        try {
            const deletedJob = await Job.deleteJob( id );
            console.log(deletedJob);
            history.push('/dashboard/jobs');

        } catch (error) {
            return console.log(error);
        }
    };

    return (
        <Modal
            show={ props.show }
            size="md"
            centered>

            <Modal.Body>
                {
                    props.children ? (

                        props.children

                    ) : (

                        <h4>Are you sure want to delete this job ? </h4>
                    )
                }
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={ props.showModal }>Close</Button>
                <Button variant="danger" onClick={ () => handleDeleteJob(jobId) }>yes</Button>
            </Modal.Footer>

        </Modal> 
    );

};

const mapStateToProps = ( state ) => ({
    show: state.modal.show
});

const mapDispatchToProps = dispatch => ({
    showModal: () => dispatch( showModal() )
});


export default connect( mapStateToProps, mapDispatchToProps )( QuestionModal );
