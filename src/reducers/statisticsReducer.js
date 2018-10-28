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

export const statisticsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
