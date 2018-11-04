import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'native-base';


class RoutineScreen extends Component {
    renderTasks() {
        const { routine } = this.props;
        console.log(routine);
        return _.map(routine, (task, taskId) => <Text key={taskId}>{task.title}</Text>);
    }

    render() {
        return (
            <View>
                {this.renderTasks()}
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
    routine: state.routine
});

export default connect(mapStateToProp, null)(RoutineScreen);
