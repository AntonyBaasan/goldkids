import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { pageReducer } from './pageReducer';
import { kidsReducer } from './kidsReducer';
import { todoReducer } from './todoReducer';
import { todoDisplayReducer } from './todoDisplayReducer';
import { statisticsReducer } from './statisticsReducer';

export default combineReducers({
    page: pageReducer,
    counter: counterReducer,
    kids: kidsReducer,
    todo: todoReducer,
    todoDisplay: todoDisplayReducer,
    statistics: statisticsReducer,
});
