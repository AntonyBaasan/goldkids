import { UPDATE_TODOS } from './actionTypes';
import { updateKid } from './kidsActions';

export const updateTodo = ({ todoId, prop, value }) => ({
    type: UPDATE_TODOS,
    payload: { todoId, prop, value },
});

const updateKidsCoins = (dispatch, state, todoId) => {
    const { todos, kids, tasks } = state;
    const todo = todos[todoId];

    // only if done, than update kid's coins
    if (todo.status === 'done') {
        const kid = kids[todo.kidId];
        const task = tasks[todo.refTaskId];
        kid.coins += task.coins;
        dispatch(updateKid({
            id: todo.kidId,
            kid
        }));
    }
};

/**
 * 1. update a todo object
 * 2. update weekly stats
 */
export const updateTodoStatus = ({ todoId, newStatus }) => (dispatch, getState) => {
    dispatch(updateTodo({ todoId, prop: 'status', value: newStatus }));
    updateKidsCoins(dispatch, getState(), todoId);
};
