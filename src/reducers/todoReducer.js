import { UPDATE_TODOS } from '../actions/actionTypes';

const INITIAL_STATE = {
    week1: {
        xuuser1:/* Kid Id */ {
            Monday: {
                todoId1: { title: 'Week1 Task1 xuuser1', done: true, score: 1 },
                todoId2: { title: 'Week1 Task2 xuuser1', done: true, score: 2 }
            },
            Tuesday: {
                todoId1: { title: 'Week1 Task1 xuuser1', done: true, score: 1 },
            },
            Saturday: {
                task1: { title: 'Week1 todo 1 xuuser1', done: false, score: 1 },
                task2: { title: 'Week1 todo 2 xuuser1', done: false, score: 1 },
                task4: { title: 'Week1 todo 3 xuuser1', done: true, score: 1 },
                task5: { title: 'Week1 todo 4 xuuser1', done: true, score: 1 },
            }
        },
        xuuser2: {
            Monday: {
                todoId1: { title: 'Week1 Task1 xuuser2', done: true, score: 1 },
            },
            Tuesday: {
                todoId1: { title: 'Week1 Task1 xuuser2', done: true, score: 1 },
                todoId2: { title: 'Week1 Task2 xuuser2', done: true, score: 1 },
            }
        }
    },
    week2: {
        xuuser1:/* Kid Id */ {
            Monday: {
                todoId1: { title: 'Week2 task1 xuuser1', done: true, score: 1 },
            },
            Tuesday: {
                todoId1: { title: 'Week2 task1 xuuser1', done: true, score: 1 },
                todoId2: { title: 'Week2 task2 xuuser1', done: true, score: 1 },
            },
            Wednesday: {
                todoId1: { title: 'Week2 task1 xuuser1', done: true, score: 1 },
            },
            Thursday: {
                todoId1: { title: 'Week2 task1 xuuser1', done: true, score: 1 },
            },
            Friday: {
                todoId1: { title: 'Week2 task1 xuuser1', done: true, score: 1 },
            },
            Saturday: {
                todoId1: { title: 'Week2 task1 xuuser1', done: true, score: 1 },
            },
            Saturday: {
                todoId1: { title: 'Week2 task1 xuuser1', done: true, score: 1 },
            }
        },
        xuuser2: {
            Monday: {
                todoId1: { title: 'week2 Task1 xuuser2', done: true, score: 1 },
            },
            Tuesday: {
                todoId1: { title: 'week2 Task1 xuuser2', done: true, score: 1 },
                todoId2: { title: 'week2 Task2 xuuser2', done: true, score: 1 },
            }
        }
    }
};

const getNewStateAfterTraverseTodo = function (state, payload) {
    const { kidId, displayWeek, displayDayOfWeek, taskId, task, updatedPropAndValue } = payload;
    const newTask = { ...task, ...updatedPropAndValue };
    return {
        ...state,
        [displayWeek]: {
            ...state[kidId][displayWeek],
            [kidId]: {
                ...state[kidId],
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
        case UPDATE_TODOS:
            // update current user
            console.log(action.payload);
            return getNewStateAfterTraverseTodo(state, action.payload);
        default:
            return state;
    }
};
