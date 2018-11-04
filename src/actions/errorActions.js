import { ADD_ERROR, CLEAR_ERROR } from './actionTypes';

export const AddError = ({ message }) => ({
    type: ADD_ERROR,
    payload: { message },
});

export const ClearError = () => ({
    type: CLEAR_ERROR,
});
