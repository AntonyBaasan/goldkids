const INITIAL_STATE = {
    rewardId1: {
        title: 'ice cream',
        requiredCoins: 80,
        picture: '',
        relatedKids: ['xuuser1', 'xuuser2']
    },
    rewardId2: {
        title: 'iPad 30 min',
        requiredCoins: 220,
        picture: '',
        relatedKids: ['xuuser1', 'xuuser2']
    },
};

export const rewardsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
