import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'native-base';
import { SetKidsFormProperties } from '../../actions/index';

class TaskForm extends Component {
    changeName(text) {
        this.props.SetKidsFormProperties({ prop: 'title', value: text });
    }
    changeId(id) {
        this.props.SetKidsFormProperties({ prop: 'id', value: id });
    }
    render() {
        return (
            <View>
                <Text>{this.props.errorMessage}</Text>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
});
export default connect(mapStateToProp, { SetKidsFormProperties })(TaskForm);
