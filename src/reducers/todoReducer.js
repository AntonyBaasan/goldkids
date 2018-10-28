import { UPDATE_USER_WEEKLY_TODOS } from '../actions/actionTypes';

const INITIAL_STATE = {
    xuuser1/* Kid Id */: {
        week1: {
            Monday: {
                todoId1: { title: 'Task1', done: true, score: 1 },
                todoId2: { title: 'Task2', done: true, score: 2 }
            },
            Tuesday: {
                task1: { done: true, score: 1 },
                task2: { done: true, score: 2 }
            },
            Saturday: {
                task1: { title: 'Test todo 1', done: false, score: 1 },
                task2: { title: 'Test todo 2', done: false, score: 1 },
                task4: { title: 'Test todo 3', done: true, score: 1 },
                task5: { title: 'Test todo 4', done: true, score: 1 },
            }
        },
    },
    xuuser2: {
        week1: {
            Monday: {
                task1: { done: true, score: 1 },
                task2: { done: true, score: 2 }
            },
            Tuesday: {
                task1: { done: true, score: 1 },
                task2: { done: true, score: 2 }
            }
        }
    }
};

const traverseTodoTillTodo = function (state, payload) {
    const { kidId, displayWeek, displayDayOfWeek, taskId, task, updatedPropAndValue } = payload;
    const newTask = { ...task, ...updatedPropAndValue };
    return {
        ...state,
        [kidId]: {
            ...state[kidId],
            [displayWeek]: {
                ...state[kidId][displayWeek],
                [displayDayOfWeek]: {
                    ...state[kidId][displayWeek][displayDayOfWeek],
                    [taskId]: newTask
                }
            }
        }
    };
};

export const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_USER_WEEKLY_TODOS:
            // update current user
            console.log(action.payload);
            return traverseTodoTillTodo(state, action.payload);
        default:
            return state;
    }
};
