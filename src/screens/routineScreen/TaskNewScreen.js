import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import TaskForm from './TaskForm';
import { InsertNewTaskByTaskForm } from '../../actions';

class TaskNewScreen extends Component {

    addNew() {
        this.props.InsertNewTaskByTaskForm();
    }

    render() {
        return (
            <View>
                <Text >New task</Text>
                <TaskForm />
                <Button
                    bordered
                    onPress={() => this.addNew()}
                >
                    <Text>New</Text>
                </Button>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
});
export default connect(mapStateToProp, { InsertNewTaskByTaskForm })(TaskNewScreen);
