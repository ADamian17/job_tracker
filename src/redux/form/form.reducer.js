import { formActionTypes } from './form.types';

const INITIAL_STATE = {
  showEdit: false
};

const formReducer = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
    case formActionTypes.SHOW_JOB_EDIT:
      return {
        ...state,
        showEdit: !state.showEdit
      }; 
    default:
      return state; 
  }
};

export default formReducer;
