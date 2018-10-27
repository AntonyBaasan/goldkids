import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';

class KidsTodoList extends Component {

    componentWillMount() {
    }

    componentDidMount() {
    }

    renderTodoList() {
        return _.map(this.props.todoListObject, (task, taskId) => (
            <View key={taskId}>
                <Text>{taskId}::{task.title}</Text>
                <Button
                    bordered
                    onPress={() => { }}
                >
                    <Text>Done</Text>
                </Button>
            </View>
        ));
    }

    render() {
        return (
            <View>
                {this.renderTodoList()}
            </View>
        );
    }
}

const mapStateToProp = (state) => {
    const { kidsTasks } = state.todo;
    const { displayKidId, displayWeek, displayDayOfWeek } = state.todoDisplay;
    const kidsId = displayKidId || Object.keys(state.kids)[0];
    if (kidsId) {
        const todoListObject = kidsTasks[kidsId][displayWeek][displayDayOfWeek];
        return {
            todoListObject,
        };
    }
    return {};
};

export default connect(mapStateToProp, null)(KidsTodoList);
