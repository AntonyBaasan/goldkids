import { UPDATE_TODOS } from '../actions/actionTypes';

const INITIAL_STATE = {
    todoId1: {
        refTaskId: 'task1',
        status: 'new', // 'waiting', 'done'
        coins: 20,
        kidId: 'xuuser1',
    },
    todoId2: {
        refTaskId: 'task2',
        status: 'new', // 'waiting', 'done'
        coins: 10,
        kidId: 'xuuser2',
    }
};

const getNewStateAfterTraverseTodo = function (state, payload) {
    const { kidId, displayWeek, displayDayOfWeek, taskId, task, updatedPropAndValue } = payload;
    const newTask = { ...task, ...updatedPropAndValue };
    return {
        ...state,
        [displayWeek]: {
            ...state[displayWeek],
            [kidId]: {
                ...state[displayWeek][kidId],
                [displayDayOfWeek]: {
                    ...state[displayWeek][kidId][displayDayOfWeek],
                    [taskId]: newTask
                }
            }
        }
    };
};

export const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_TODOS:
            // update current user
            console.log(action.payload);
            return getNewStateAfterTraverseTodo(state, action.payload);
        default:
            return state;
    }
};
