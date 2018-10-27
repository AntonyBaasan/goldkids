import { ADD_CHILD } from '../actions/actionTypes';

const INITIAL_STATE = {
    1: {
        name: 'Buyan',
        picture: '',
    },
    2: {
        name: 'Amy',
        picture: '',
    }
};

export const kidsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CHILD:
            // TODO
            return state;
        default:
            return state;
    }
};
