import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'native-base';
import TodoItem from './TodoItem';

class TodoList extends Component {

    renderTodoList() {
        return _.map(this.props.todos, (todo, todoId) => <TodoItem todoId={todoId} todo={todo} />);
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

    let todos = state.todos;
    if (displayKidId) {
        todos = _.pickBy(state.todos, t => t.kidId === displayKidId);
    }
    return {
        todos,
        kidId: displayKidId
    };
};

export default connect(mapStateToProp, null)(TodoList);
