import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import { updateTodoAndUpdateStat } from '../../actions';

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
        this.props.updateTodoAndUpdateStat({
            kidId,
            displayWeek,
            displayDayOfWeek,
            taskId,
            task,
            updatedPropAndValue
        });

        // this.updateStat(kidId, displayWeek);
    }

    // updateStat(kidId, weekId) {
    //     const { todoListOfWeek } = this.props;
    //     const newStat = { done: 0, planned: 0 };
    //     _.forEach(todoListOfWeek, (dailyTodos) => {
    //         _.forEach(dailyTodos, (todo) => {
    //             if (todo.done) {
    //                 newStat.done += 1;
    //             }
    //             newStat.planned += 1;
    //         });
    //     });

    //     this.props.setKidWeeklyStat({
    //         kidId,
    //         weekId,
    //         newStat
    //     });
    // }

    renderTodoList() {
        return _.map(this.props.todoListOfDay, (task, taskId) => (
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
        const todoListOfDay = state.todo[kidId][displayWeek][displayDayOfWeek];
        const todoListOfWeek = state.todo[kidId][displayWeek];
        return {
            todoListOfDay,
            todoListOfWeek,
            displayWeek,
            displayDayOfWeek,
            kidId
        };
    }
    return {};
};

export default connect(mapStateToProp, { updateTodoAndUpdateStat })(KidsTodoList);
