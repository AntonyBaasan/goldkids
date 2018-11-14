import React, { Component } from 'react';
import { Text, View } from 'native-base';
import { connect } from 'react-redux';

class RewardsScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Reward Screen 2</Text>
            </View>
        );
    }
}

export default connect(null, null)(RewardsScreen);
