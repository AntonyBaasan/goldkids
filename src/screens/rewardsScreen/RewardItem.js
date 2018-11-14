import React, { Component } from 'react';
import { Text, Button, View } from 'native-base';
import { connect } from 'react-redux';

class RewardItem extends Component {

    useReward(rewardId, reward) {

    }

    renderButton(rewardId, reward) {
        if (this.props.currentKid.coins >= reward.requiredCoins) {
            return this.renderUseButton(rewardId, reward);
        }

        return this.renderNotEnoughButton(rewardId, reward);
    }

    renderUseButton(rewardId, reward) {
        return (<Button
            bordered
            onPress={() => {
                this.useReward(rewardId, reward);
            }}
        >
            <Text>Take this reward</Text>
        </Button>);
    }
    renderNotEnoughButton(rewardId, reward) {
        return (<Button
            bordered
            disabled
        >
            <Text>Need {reward.requiredCoins - this.props.currentKid.coins} more coins</Text>
        </Button>);
    }

    render() {
        console.log(this.props);
        const { rewardId, reward } = this.props;
        return (
            <View>
                <Text>{reward.title}:{reward.requiredCoins}</Text>
                {this.renderButton(rewardId, reward)}
            </View>
        );
    }
}

const mapStateToProp = (state) => {
    const { displayKidId } = state.todoDisplay;
    const currentKid = state.kids[displayKidId];
    return {
        currentKid
    };
};

export default connect(mapStateToProp, null)(RewardItem);
