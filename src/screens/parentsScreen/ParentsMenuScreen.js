import React, { Component } from 'react';
import { Text, View } from 'native-base';
import { connect } from 'react-redux';

class ParentsMenuScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Parents Menu Screen 2</Text>
            </View>
        );
    }
}

export default connect(null, null)(ParentsMenuScreen);
