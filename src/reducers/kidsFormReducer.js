import { KIDS_FORM_VALUE } from '../actions/actionTypes';

const INITIAL_STATE = {
    id: 'child1',
    name: 'name',
    picture: '',
};

export const kidsFormReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case KIDS_FORM_VALUE:
        console.log(action.payload);
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};
