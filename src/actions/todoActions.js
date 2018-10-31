import _ from 'lodash';
import { UPDATE_TODOS } from './actionTypes';
import { setKidWeeklyStat } from './statisticsActions';

/**
 * In order to udpate a Todo object 
 * need to send information related to hierarchy
 * 
 * param format:
 * updateInfo = {
 *   kidId,
 *   displayWeek,
 *   displayDayOfWeek,
 *   taskId,
 *   task,
 *   updatedPropAndValue
 *}
 */
// 
export const updateTodo = (updateInfo) => ({
    type: UPDATE_TODOS,
    payload: updateInfo,
});

// go through daily stats, aggregate results and return as new object
const getCalculatedState = (todoListOfWeek) => {
    const newStat = { done: 0, planned: 0 };
    _.forEach(todoListOfWeek, (dailyTodos) => {
        _.forEach(dailyTodos, (todo) => {
            if (todo.done) {
                newStat.done += 1;
            }
            newStat.planned += 1;
        });
    });
    return newStat;
};

/**
 * 1. update a todo object
 * 2. update weekly stats
 */
export const updateTodoAndUpdateStat = (updateInfo) => {
    const { kidId, displayWeek } = updateInfo;

    return (dispatch, getState) => {
        dispatch(updateTodo(updateInfo));

        // calculate and update the week stats
        const { todo } = getState();
        const todoListOfWeek = todo[kidId][displayWeek];
        const newStat = getCalculatedState(todoListOfWeek);
        dispatch(setKidWeeklyStat({
            kidId,
            weekId: displayWeek,
            newStat
        }));
    };
};
