import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'native-base';
import TodoItem from './TodoItem';

class TodoList extends Component {

    renderTodoList() {
        return _.map(this.props.todos, (todo, todoId) => {
            console.log(todo, todoId);
            // return <View></View>;
            return <TodoItem todoId={todoId} todo={todo} />;
        });
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
    const { displayKidId } = state.todoDisplay;

    const kidId = displayKidId;
    let todos = {};
    if (kidId) {
        todos = state.todos;
    } else {
        todos = state.todos;
    }
    return {
        todos,
        kidId
    };
};

export default connect(mapStateToProp, null)(TodoList);
