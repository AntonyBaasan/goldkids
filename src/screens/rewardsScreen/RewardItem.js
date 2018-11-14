import React, { Component } from 'react';
import { Text, View } from 'native-base';
import { connect } from 'react-redux';

class RewardItem extends Component {

    render() {
        const { reward } = this.props;
        return (
            <View>
                <Text>{reward.title}:{reward.requiredCoins}</Text>
            </View>
        );
    }
}

export default connect(null, null)(RewardItem);
