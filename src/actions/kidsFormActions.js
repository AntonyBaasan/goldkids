import _ from 'lodash';
import NavigatorService from '../services/NavigatorService';
import { KIDS_FORM_VALUE } from './actionTypes';
import { addNewKid, updateKid } from './kidsActions';
import { AddError, ClearError } from './errorActions';

export const SetKidsFormProperties = ({ prop, value }) => ({
    type: KIDS_FORM_VALUE,
    payload: { prop, value },
});

// Save Kids form to Kids state
export const updateKidByKidsForm = () => (dispatch, getState) => {
    const { kidsForm, kids } = getState();

    if (!kidsForm.name) {
        dispatch(AddError({ message: 'Name is empty!' }));
    } else if (!kidsForm.id) {
        dispatch(AddError({ message: 'Id can\'t be empty!' }));
    } else if (!_.get(kids, kidsForm.id)) {
        dispatch(AddError({ message: 'Id doesn\'t exist' }));
    } else {
        dispatch(ClearError());
        dispatch(updateKid(kidsForm));
        NavigatorService.navigate('KidsScreen');
    }
};

// Save Kids form to Kids state
export const InsertNewKidByKidsForm = () => (dispatch, getState) => {
    const { kidsForm, kids } = getState();

    if (!kidsForm.name) {
        dispatch(AddError({ message: 'Name is empty!' }));
    } else if (!kidsForm.id) {
        dispatch(AddError({ message: 'Id can\'t be empty!' }));
    } else if (_.get(kids, kidsForm.id)) {
        dispatch(AddError({ message: 'Id already exists' }));
    } else {
        dispatch(ClearError());
        dispatch(addNewKid(kidsForm));
        NavigatorService.navigate('KidsScreen');
    }
};
