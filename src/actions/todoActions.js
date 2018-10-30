import _ from 'lodash';
import { UPDATE_USER_WEEKLY_TODOS } from './actionTypes';
import { setKidWeeklyStat } from './statisticsActions';

// updateInfo = {
//     kidId,
//     displayWeek,
//     displayDayOfWeek,
//     taskId,
//     task,
//     updatedPropAndValue
// }
export const updateKidWeeklyTodos = (updateInfo) => ({
    type: UPDATE_USER_WEEKLY_TODOS,
    payload: updateInfo,
});

const calculateState = (todoListOfWeek) => {
    const newStat = { done: 0, planned: 0 };
    _.forEach(todoListOfWeek, (dailyTodos) => {
        _.forEach(dailyTodos, (todo) => {
            if (todo.done) {
                newStat.done += 1;
            }
            newStat.planned += 1;
        });
    });
};
export const updateTodoAndUpdateStat = (updateInfo) => {
    const { kidId, displayWeek } = updateInfo;

    return (dispatch, getState) => {
        dispatch(updateKidWeeklyTodos(updateInfo));

        const { todo } = getState();
        const todoListOfWeek = todo[kidId][displayWeek];
        const newStat = calculateState(todoListOfWeek);
        dispatch(setKidWeeklyStat({
            kidId,
            weekId: displayWeek,
            newStat
        }));
    };
};
