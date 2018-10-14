import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Gold Kids</Text>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8B8'
    },
    textStyle: {
        fontSize: 50
    }
};
