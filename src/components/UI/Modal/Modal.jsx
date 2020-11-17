import React from 'react';
import { Modal } from 'react-bootstrap';

import { connect } from 'react-redux';
import { showModal, hideModal } from '../../../redux/modal/modal.action';

const QuestionModal = ( props ) => {

    return (
        <Modal
            show={ props.show }
            onHide={ props.hideModal }
            size={props.size}
            centered>

            <Modal.Body>
                {
                    props.children 
                }
            </Modal.Body>

        </Modal> 
    );

};

const mapStateToProps = ( state ) => ({
    show: state.modal.show,
    currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
    showModal: () => dispatch( showModal() ),
    hideModal: () => dispatch( hideModal() )
});


export default connect( mapStateToProps, mapDispatchToProps )( QuestionModal );
