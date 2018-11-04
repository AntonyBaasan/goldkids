import { ADD_KID, UPDATE_KID } from './actionTypes';

export const AddNewKid = (kid) => ({
    type: ADD_KID,
    payload: kid,
});

export const UpdateKid = (kid) => ({
    type: UPDATE_KID,
    payload: kid,
});
