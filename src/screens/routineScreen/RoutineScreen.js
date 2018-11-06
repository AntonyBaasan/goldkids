import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Text } from 'native-base';
import RoutineItem from './RoutineItem';

class RoutineScreen extends Component {
    addNewTask() {
        this.props.navigation.navigate('TaskEditScreen');
    }
    renderTasks() {
        const { routine } = this.props;
        console.log(routine);
        return _.map(routine, (task, taskId) =>
            <RoutineItem
                key={taskId}
                task={task}
                id={taskId}
            />
        );
    }

    render() {
        return (
            <View>
                {this.renderTasks()}
                <Button
                    onPress={() => this.addNewTask()}
                >
                    <Text>Add New</Text>
                </Button>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
    routine: state.routine
});

export default connect(mapStateToProp, null)(RoutineScreen);
