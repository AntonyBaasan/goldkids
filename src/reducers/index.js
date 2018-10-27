import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { pageReducer } from './pageReducer';
import { kidsReducer } from './kidsReducer';

export default combineReducers({
    page: pageReducer,
    counter: counterReducer,
    kids: kidsReducer,
});
