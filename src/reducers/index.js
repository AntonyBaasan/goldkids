import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { pageReducer } from './pageReducer';

export default combineReducers({
    page: pageReducer,
    counter: counterReducer
});
