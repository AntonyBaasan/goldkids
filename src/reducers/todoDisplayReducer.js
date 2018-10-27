import { TODO_DISPLAY_SELECT_DAY, TODO_DISPLAY_SELECT_KID } from '../actions/actionTypes';

const INITIAL_STATE = {
    displayWeek: 'week1',
    displayDayOfWeek: null,
    displayKidId: null
};

export const todoDisplayReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TODO_DISPLAY_SELECT_DAY:
            return Object.assign({}, state, { displayDayOfWeek: action.payload });
        case TODO_DISPLAY_SELECT_KID:
            return Object.assign({}, state, { displayKidId: action.payload });
        default:
            return state;
    }
};
