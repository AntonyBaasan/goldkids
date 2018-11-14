import { ADD_TASK_TO_ROUTINE, UPDATE_TASK_ON_ROUTINE } from '../actions/actionTypes';

const INITIAL_STATE = {
    task1: {
        title: 'Task1',
        recursion: 'oneTime', //'weekly'
        days: ['Monday', 'Tuesday'],
        assigned: ['xuuser1', 'xuuser2'],
    },
    task2: {
        title: 'Task2',
        recursion: 'oneTime', //'weekly'
        days: ['Monday', 'Tuesday', 'Friday', 'Saturday'],
        assigned: ['xuuser1', 'xuuser2']
    },
    task3: {
        title: 'Task3',
        recursion: 'oneTime', //'weekly'
        days: ['Friday', 'Saturday'],
        assigned: ['xuuser1', 'xuuser2']
    },
};

export const tasksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TASK_TO_ROUTINE:
            return { ...state, [action.payload.id]: action.payload };
        case UPDATE_TASK_ON_ROUTINE:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};
