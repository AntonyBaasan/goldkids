import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

export default class Header extends Component {
    componentWillMount() {
        console.log('Hello World Antony!');
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                console.log(response);
            });
    }
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
