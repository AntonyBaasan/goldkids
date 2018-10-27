import { ADD_CHILD } from '../actions/actionTypes';

const INITIAL_STATE = {
    kidsTasks: {

        1/* Kid Id */: {
            week1: {
                Monday: {
                    todoId1: { title: '', done: true, score: 1 },
                    todoId2: { title: '', done: true, score: 2 }
                },
                Tuesday: {
                    task1: { done: true, score: 1 },
                    task2: { done: true, score: 2 }
                },
            }
        },
        2: {
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
    }
};

export const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CHILD:
            // TODO
            return state;
        default:
            return state;
    }
};
