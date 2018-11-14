import { UPDATE_TODOS } from './actionTypes';
import { updateKid } from './kidsActions';

export const updateTodo = ({ todoId, prop, value }) => ({
    type: UPDATE_TODOS,
    payload: { todoId, prop, value },
});

/**
 * 1. update a todo object
 * 2. update weekly stats
 */
export const updateTodoStatus = ({ todoId, newStatus }) => {
    return (dispatch, getState) => {
        dispatch(updateTodo({ todoId, prop: 'status', value: newStatus }));

        const { todos, kids, tasks } = getState();
        const todo = todos[todoId];
        const kidId = todo.kidId;
        const kid = kids[kidId];
        const task = tasks[todo.refTaskId];
        kid.coins += task.coins;
        dispatch(updateKid({
            id: kidId,
            kid
        }));
    };
};
