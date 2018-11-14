import { ADD_KID, UPDATE_KID } from './actionTypes';

export const addNewKid = (kid) => ({
    type: ADD_KID,
    payload: kid,
});

export const updateKid = (kid) => ({
    type: UPDATE_KID,
    payload: kid,
});
