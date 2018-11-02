import {
    TODO_DISPLAY_SELECT_DAY,
    TODO_DISPLAY_SELECT_KID,
    TODO_DISPLAY_SELECT_WEEK
} from './actionTypes';

export const selectTodoDisplayDay = (day) => ({
    type: TODO_DISPLAY_SELECT_DAY,
    payload: day,
});

export const selectTodoDisplayKid = (kidId) => ({
    type: TODO_DISPLAY_SELECT_KID,
    payload: kidId,
});

export const selectTodoDisplayWeek = (weekId) => ({
    type: TODO_DISPLAY_SELECT_WEEK,
    payload: weekId,
});

