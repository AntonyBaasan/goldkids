import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { pageReducer } from './pageReducer';
import { kidsReducer } from './kidsReducer';
import { kidsFormReducer } from './kidsFormReducer';
import { todoReducer } from './todoReducer';
import { todoDisplayReducer } from './todoDisplayReducer';
import { statisticsReducer } from './statisticsReducer';
import { errorReducer } from './errorReducer';
import { routineReducer } from './routineReducer';
import { taskFormReducer } from './taskFormReducer';

export default combineReducers({
    page: pageReducer,
    counter: counterReducer,
    kids: kidsReducer,
    kidsForm: kidsFormReducer,
    todo: todoReducer,
    todoDisplay: todoDisplayReducer,
    statistics: statisticsReducer,
    error: errorReducer,
    routine: routineReducer,
    taskForm: taskFormReducer
});
