import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { pageReducer } from './pageReducer';
import { kidsReducer } from './kidsReducer';
import { kidsFormReducer } from './kidsFormReducer';
import { todoReducer } from './todoReducer';
import { todoDisplayReducer } from './todoDisplayReducer';
import { statisticsReducer } from './statisticsReducer';
import { errorReducer } from './errorReducer';
import { tasksReducer } from './tasksReducer';
import { taskFormReducer } from './taskFormReducer';
import { rewardsReducer } from './rewardsReducer';

export default combineReducers({
    page: pageReducer,
    counter: counterReducer,
    kids: kidsReducer,
    kidsForm: kidsFormReducer,
    todos: todoReducer,
    todoDisplay: todoDisplayReducer,
    statistics: statisticsReducer,
    error: errorReducer,
    tasks: tasksReducer,
    taskForm: taskFormReducer,
    rewards: rewardsReducer
});
