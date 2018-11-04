import { KIDS_FORM_VALUE } from './actionTypes';

export const SetKidsFormProperties = ({ prop, value }) => ({
    type: KIDS_FORM_VALUE,
    payload: { prop, value },
});
