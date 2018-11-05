import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'native-base';


class RoutineItem extends Component {

    render() {
        const { task } = this.props;
        return (
            <Text> {task.title}</Text>
        );
    }
}

export default connect(null, null)(RoutineItem);
