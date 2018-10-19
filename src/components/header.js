import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentWillMount() {
        console.log('Hello World Antony!');
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                console.log(response);
                this.state.count = response.data.length;
                this.setState(this.state);
            });
    }
    render() {
        const { viewStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text style={styles.textStyle}>Gold Kids {this.state.count}</Text>
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
