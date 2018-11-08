import _ from 'lodash';
import NavigatorService from '../services/NavigatorService';
import { TASK_FORM_SET_PROPERTY } from './actionTypes';
import { AddNewTaskToRoutine, UpdateTaskOnRoutine } from './routineActions';
import { AddError, ClearError } from './errorActions';

export const SetTaskFormProperties = ({ prop, value }) => ({
    type: TASK_FORM_SET_PROPERTY,
    payload: { prop, value },
});

// Save Kids form to Kids state
export const UpdateTaskByTaskForm = () => (dispatch, getState) => {
    const { taskForm, routine } = getState();

    if (!taskForm.title) {
        dispatch(AddError({ message: 'Title is empty!' }));
    } else if (!taskForm.id) {
        dispatch(AddError({ message: 'Id can\'t be empty!' }));
    } else if (!_.get(routine, taskForm.id)) {
        dispatch(AddError({ message: 'Id doesn\'t exist' }));
    } else {
        dispatch(ClearError());
        dispatch(UpdateTaskOnRoutine(taskForm));
        NavigatorService.navigate('RoutineScreen');
    }
};

// Save Kids form to Kids state
export const InsertNewTaskByTaskForm = () => (dispatch, getState) => {
    const { taskForm, routine } = getState();

    if (!taskForm.title) {
        dispatch(AddError({ message: 'Name is empty!' }));
    } else if (!taskForm.id) {
        dispatch(AddError({ message: 'Id can\'t be empty!' }));
    } else if (_.get(routine, taskForm.id)) {
        dispatch(AddError({ message: 'Id already exists' }));
    } else {
        dispatch(ClearError());
        dispatch(AddNewTaskToRoutine(taskForm));
        NavigatorService.navigate('RoutineScreen');
    }
};
