import { ADD_KID, UPDATE_KID } from '../actions/actionTypes';

const INITIAL_STATE = {
    xuuser1: {
        name: 'Buyan',
        avatar: '',
    },
    xuuser2: {
        name: 'Amy',
        avatar: '',
    }
};

export const kidsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_KID:
            return { ...state, [action.payload.id]: action.payload };
        case UPDATE_KID:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};
