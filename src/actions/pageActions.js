import { MOVE_TO_PAGE } from './actionTypes';

export const MoveToPage = (pageName) => ({
    type: MOVE_TO_PAGE,
    payload: pageName,
});
