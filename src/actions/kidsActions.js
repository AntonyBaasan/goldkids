import { ADD_CHILD } from './actionTypes';

export const MoveToPage = (child) => ({
    type: ADD_CHILD,
    payload: child,
});
