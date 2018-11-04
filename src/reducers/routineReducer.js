// import { UPDATE_TODOS } from '../actions/actionTypes';

const INITIAL_STATE = {
    todoId1: {
        title: 'Task1',
        days: ['Monday', 'Tuesday'],
        assigned: ['xuuser1', 'xuuser2']
    },
    todoId2: {
        title: 'Task2',
        days: ['Monday', 'Tuesday', 'Friday', 'Saturday'],
        assigned: ['xuuser1', 'xuuser2']
    },
    todoId3: {
        title: 'Task3',
        days: ['Friday', 'Saturday'],
        assigned: ['xuuser1', 'xuuser2']
    },
};

// const getNewStateAfterTraverseTodo = function (state, payload) {
//     const { kidId, displayWeek, displayDayOfWeek, taskId, task, updatedPropAndValue } = payload;
//     const newTask = { ...task, ...updatedPropAndValue };
//     return {
//         ...state,
//         [displayWeek]: {
//             ...state[displayWeek],
//             [kidId]: {
//                 ...state[displayWeek][kidId],
//                 [displayDayOfWeek]: {
//                     ...state[displayWeek][kidId][displayDayOfWeek],
//                     [taskId]: newTask
//                 }
//             }
//         }
//     };
// };

export const routineReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
