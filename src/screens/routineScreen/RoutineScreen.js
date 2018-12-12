import _ from 'lodash';
import uuid from 'uuid/v1';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Text } from 'native-base';
import RoutineItem from './RoutineItem';
import { SetTaskFormProperties, ClearError } from '../../actions';

class RoutineScreen extends Component {
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
                    <Text>New</Text>
                </Button>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
    routine: state.routine
});

export default connect(mapStateToProp, { SetTaskFormProperties, ClearError })(RoutineScreen);
