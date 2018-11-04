import { ADD_ERROR, CLEAR_ERROR } from '../actions/actionTypes';

const INITIAL_STATE = null;
// {
//     message: 'Something!',
// };

export const errorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return action.payload;
        case CLEAR_ERROR:
            return null;
        default:
            return state;
    }
};
