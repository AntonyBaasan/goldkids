import React, { Component } from 'react';
import { View } from 'native-base';
import { connect } from 'react-redux';

class RewardTempScreen extends Component {
    static navigationOptions = {
        title: 'Rewards',
    };

    render() {
        return (
            <View style={{ flex: 1 }} />
        );
    }
}

const mapStateToProp = (state) => ({
    rewards: state.rewards
});

export default connect(mapStateToProp, null)(RewardTempScreen);
