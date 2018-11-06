import { TASK_FORM_SET_PROPERTY } from '../actions/actionTypes';

const INITIAL_STATE = {
    id: 'task1',
    title: 'This is a title',
    days: [],
    assigned: [],
};

export const taskFormReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TASK_FORM_SET_PROPERTY:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};
