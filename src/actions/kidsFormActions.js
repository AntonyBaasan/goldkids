import { ADD_CHILD } from './actionTypes';

export const AddNewKid = (child) => ({
    type: ADD_CHILD,
    payload: child,
});
