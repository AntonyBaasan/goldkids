import { MOVE_TO_PAGE } from '../actions/actionTypes';

const INITIAL_STATE = { currentPage: 0 };
export const pageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOVE_TO_PAGE:
            return { ...state, currentPage: action.payload };
        default:
            return state;
    }
};
