import { ModalActionTypes } from './modal.types';

export const showModal = () => ({
    type: ModalActionTypes.SHOW_MODAL
});

export const hideModal = () => ({
    type: ModalActionTypes.HIDE_MODAL
});
