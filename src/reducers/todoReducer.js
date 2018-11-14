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

const updateProp = function (state, payload) {
    const { todoId, prop, value } = payload;
    return {
        ...state,
        [todoId]: {
            ...state[todoId],
            [prop]: value
        }
    };
};

export const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_TODOS:
            // update current user
            console.log(action.payload);
            return updateProp(state, action.payload);
        default:
            return state;
    }
};
