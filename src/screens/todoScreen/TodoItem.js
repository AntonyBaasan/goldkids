// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import { updateTodoStatus } from '../../actions';

class TodoItem extends Component {

    doneTask(todoId) {
        this.props.updateTodoStatus({ todoId, newStatus: 'waiting' });
    }

    renderButtons(todoId, todo) {
        if (todo.status === 'new') {
            return this.renderDoneButton(todoId, todo);
        } else if (todo.status === 'waiting') {
            return this.renderWaitingButton();
        }
    }

    renderDoneButton(todoId, todo) {
        return (<Button
            bordered
            onPress={() => {
                this.doneTask(todoId, todo);
            }}
        >
            <Text>Done</Text>
        </Button>);
    }

    renderWaitingButton() {
        return (<Button
            bordered
            disabled
        >
            <Text>Waiting</Text>
        </Button>);
    }


    render() {
        const { todo, todoId, task } = this.props;
        return (
            <View >
                <Text>{todoId}::{task.title}::{task.coins}</Text>
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

export default connect(mapStateToProp, { updateTodoStatus })(TodoItem);
