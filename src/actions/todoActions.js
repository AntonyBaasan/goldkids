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

        const { todos, kids } = getState();
        const kidId = todos[todoId].kidId;
        const kid = kids[kidId];
        kid.coins += todos[todoId].coins;
        dispatch(updateKid({
            id: kidId,
            kid
        }));
    };
};
