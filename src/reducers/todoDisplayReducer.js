import { TODO_DISPLAY_SELECT_DAY } from '../actions/actionTypes';

const INITIAL_STATE = {
    displayWeek: 'week1',
    displayDayOfWeek: null,
    displayUser: 1,
};

export const todoDisplayReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TODO_DISPLAY_SELECT_DAY:
            return Object.assign({}, state, { displayDayOfWeek: action.payload });
        default:
            return state;
    }
};
