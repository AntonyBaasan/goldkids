import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import TaskForm from './TaskForm';
import { UpdateTaskByTaskForm } from '../../actions';

class TaskEditScreen extends Component {

    save() {
        this.props.UpdateTaskByTaskForm();
    }

    render() {
        return (
            <View>
                <Text >Edit task</Text>
                <TaskForm />
                <Button
                    bordered
                    onPress={() => this.save()}
                >
                    <Text>Save</Text>
                </Button>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
});
export default connect(mapStateToProp, { UpdateTaskByTaskForm })(TaskEditScreen);
