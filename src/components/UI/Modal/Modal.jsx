import React from 'react';

import { connect } from 'react-redux';
import { showModal, hideModal } from '../../../redux/modal/modal.action';

import './Modal.scss';

const QuestionModal = ( props ) => {

    return (
        <div 
            className="modal" 
            style={{ display: props.show ? 'flex' : 'none' }} >
            <div className="modal__bg" onClick={props.hideModal} />

            <div className="modal__main">
                {
                    props.children 
                }
            </div>

        </div> 
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
