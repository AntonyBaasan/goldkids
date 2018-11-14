// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import { updateTodoAndUpdateStat } from '../../actions';

class TodoItem extends Component {

    // doneTask(taskId, task) {
    //     this.updateTask(taskId, task, { done: true });
    // }

    // undoTask(taskId, task) {
    //     this.updateTask(taskId, task, { done: false });
    // }

    // updateTask(taskId, task, updatedPropAndValue) {
    //     const { kidId, displayWeek, displayDayOfWeek } = this.props;
    //     console.log(kidId, displayWeek, displayDayOfWeek);

    //     this.props.updateTodoAndUpdateStat({
    //         kidId,
    //         displayWeek,
    //         displayDayOfWeek,
    //         taskId,
    //         task,
    //         updatedPropAndValue
    //     });
    // }

    renderButtons(todoId, todo) {
        return (<Button
            bordered
            onPress={() => {
                // if (todo.status === '') {
                //     this.undoTask(taskId, task);
                // } else {
                //     this.doneTask(taskId, task);
                // }
            }}
        >
            <Text>{todo.status}</Text>
        </Button>);
    }

    render() {
        const { todo, todoId, task } = this.props;
        return (
            <View >
                 <Text>{todoId}::{task.title}</Text>
                 {this.renderButtons(todoId, todo)}
             </View>
        );
    }
}

const mapStateToProp = (state, ownProps) => {
    const task = state.tasks[ownProps.todo.refTaskId];
    return {
        task
    };
};

export default connect(mapStateToProp, { updateTodoAndUpdateStat })(TodoItem);
