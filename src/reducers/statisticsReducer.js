import { UPDATE_STAT } from '../actions/actionTypes';

const INITIAL_STATE = {
    xuuser1: {
        week1: {
            done: 3,
            planned: 10
        }
    },
    xuuser2: {
        week1: {
            done: 1,
            planned: 3
        }
    }
};

const setKidWeeklyStat = (state, payload) => {
    console.log('setKidWeeklyStat', payload);
    console.log(state);
    const { kidId, weekId, newStat } = payload;
    const updatedState = {
        ...state,
        [kidId]: {
            ...state[kidId],
            [weekId]: newStat
        }
    };
    console.log(updatedState);
    return updatedState;
};

export const statisticsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_STAT:
            return setKidWeeklyStat(state, action.payload);
        default:
            return state;
    }
};
