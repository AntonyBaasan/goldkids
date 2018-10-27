import { TODO_DISPLAY_SELECT_DAY } from './actionTypes';

export const selectTodoDisplayDay = (day) => ({
    type: TODO_DISPLAY_SELECT_DAY,
    payload: day,
});
