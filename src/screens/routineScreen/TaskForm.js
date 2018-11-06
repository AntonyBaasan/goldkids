import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Text, View } from 'native-base';
import { SetTaskFormProperties } from '../../actions/index';

class TaskForm extends Component {
    changeTitle(text) {
        this.props.SetTaskFormProperties({ prop: 'title', value: text });
    }
    changeId(id) {
        this.props.SetTaskFormProperties({ prop: 'id', value: id });
    }
    render() {
        const { taskForm } = this.props;
        return (
            <View>
                <TextInput
                    onChangeText={this.changeId.bind(this)}
                    value={taskForm.id}
                />
                <TextInput
                    onChangeText={this.changeTitle.bind(this)}
                    value={taskForm.title}
                />
                <Text>{this.props.errorMessage}</Text>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
    taskForm: state.taskForm,
    errorMessage: state.error ? state.error.message : ''
});
export default connect(mapStateToProp, { SetTaskFormProperties })(TaskForm);
