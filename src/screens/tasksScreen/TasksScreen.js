import _ from 'lodash';
import uuid from 'uuid/v1';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Text } from 'native-base';
import TaskItem from './TaskItem';
import { SetTaskFormProperties, ClearError } from '../../actions';

class TasksScreen extends Component {
    static navigationOptions = {
        title: 'Tasks',
    };

    addNewTask() {
        _.map({
            id: uuid(),
            title: '',
            days: [],
            assigned: [],
        }, (value, key) => { this.props.SetTaskFormProperties({ prop: key, value }); });
        this.props.ClearError();
        this.props.navigation.navigate('TaskNewScreen');
    }
    renderTasks() {
        const { tasks } = this.props;
        console.log(tasks);
        return _.map(tasks, (task, taskId) =>
            <TaskItem
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
                    <Text>New</Text>
                </Button>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
    tasks: state.tasks
});

export default connect(mapStateToProp, { SetTaskFormProperties, ClearError })(TasksScreen);
