import _ from 'lodash';
import React, { Component } from 'react';
import { View } from 'native-base';
import { connect } from 'react-redux';
import KidsList from '../todoScreen/KidsList';
import RewardItem from './RewardItem';

class RewardsScreen extends Component {

    renderRewards() {
        return _.map(this.props.rewards, (reward, rewardId) => (
            <RewardItem key={rewardId} reward={reward} />
        ));
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <KidsList />
                {this.renderRewards()}
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
    rewards: state.rewards
});

export default connect(mapStateToProp, null)(RewardsScreen);
