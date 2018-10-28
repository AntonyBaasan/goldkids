import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import { updateKidWeeklyTodos, setKidWeeklyStat } from '../../actions';

class KidsTodoList extends Component {

    doneTask(taskId, task) {
        this.updateTask(taskId, task, { done: true });
    }

    undoTask(taskId, task) {
        this.updateTask(taskId, task, { done: false });
    }

    updateTask(taskId, task, updatedPropAndValue) {
        const { kidId, displayWeek, displayDayOfWeek } = this.props;
        console.log(kidId, displayWeek, displayDayOfWeek);
        this.props.updateKidWeeklyTodos({
            kidId,
            displayWeek,
            displayDayOfWeek,
            taskId,
            task,
            updatedPropAndValue
        });

        const newStat = { done: 20, planned: 30 };
        this.props.setKidWeeklyStat({
            kidId,
            weekId: displayWeek,
            newStat
        });
    }

    renderTodoList() {
        return _.map(this.props.todoListObject, (task, taskId) => (
            <View key={taskId}>
                <Text>{taskId}::{task.title}</Text>
                {this.renderButtons(taskId, task)}
            </View>
        ));
    }

    renderButtons(taskId, task) {
        return (<Button
            bordered
            onPress={() => {
                if (task.done) {
                    this.undoTask(taskId, task);
                } else {
                    this.doneTask(taskId, task);
                }
            }}
        >
            <Text>{task.done ? 'Undo' : 'Done'}</Text>
        </Button>);
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
    const { displayKidId,
        displayWeek,
        displayDayOfWeek } = state.todoDisplay;

    const kidId = displayKidId || Object.keys(state.kids)[0];
    if (kidId) {
        const todoListObject = state.todo[kidId][displayWeek][displayDayOfWeek];
        return {
            todoListObject,
            displayWeek,
            displayDayOfWeek,
            kidId
        };
    }
    return {};
};

export default connect(mapStateToProp, { updateKidWeeklyTodos, setKidWeeklyStat })(KidsTodoList);
