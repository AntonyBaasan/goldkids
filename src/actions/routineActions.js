import { ADD_TASK_TO_ROUTINE, UPDATE_TASK_ON_ROUTINE } from './actionTypes';

export const AddNewTaskToRoutine = (task) => ({
    type: ADD_TASK_TO_ROUTINE,
    payload: task,
});

export const UpdateTaskOnRoutine = (task) => ({
    type: UPDATE_TASK_ON_ROUTINE,
    payload: task,
});
