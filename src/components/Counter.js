import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { AddCounter, DecCounter } from '../actions';

class Counter extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    increment() {
        this.props.AddCounter();
    }
    decrement() {
        this.props.DecCounter();
    }
    render() {
        const { viewStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text>Hello world {this.props.number}</Text>
                <Button title="Add" onPress={this.increment.bind(this)} />
                <Button title="Dec" onPress={this.decrement.bind(this)} />
            </View>
        );
    }
}
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8B8'
    },
    textStyle: {
        fontSize: 20
    }
};

const mapStateToProp = (state) => ({ number: state.counter });
export default connect(mapStateToProp, { AddCounter, DecCounter })(Counter);
