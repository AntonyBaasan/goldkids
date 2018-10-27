import { UPDATE_USER_WEEKLY_TODOS } from './actionTypes';

export const updateKidWeeklyTodos = (updateInfo) => ({
    type: UPDATE_USER_WEEKLY_TODOS,
    payload: updateInfo,
});
