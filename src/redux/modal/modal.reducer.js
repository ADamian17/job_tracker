import { ModalActionTypes } from './modal.types';

const INITIAL_STATE = {
    show: false
};

const modalReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case ModalActionTypes.SHOW_MODAL:
            return {
                ...state,
                show: !state.show
            };
        default:
            return state;
    }
};

export default modalReducer;
