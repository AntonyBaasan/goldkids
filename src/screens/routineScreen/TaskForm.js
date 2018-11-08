import _ from 'lodash';
import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import { SetTaskFormProperties } from '../../actions';

class TaskForm extends Component {
    componentWillMount() {
        this.weekdays = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
    }
    changeTitle(text) {
        this.props.SetTaskFormProperties({ prop: 'title', value: text });
    }
    changeId(id) {
        this.props.SetTaskFormProperties({ prop: 'id', value: id });
    }
    toggleWeekday(day) {
        let { days } = this.props.taskForm;
        const index = days.indexOf(day);
        if (index === -1) {
            days = this.insertItem(days, day);
        } else {
            days = this.removeItem(days, day);
        }
        this.props.SetTaskFormProperties({ prop: 'days', value: days });
    }

    insertItem(array, item) {
        return [
            ...array,
            item,
        ];
    }
    removeItem(array, item) {
        const index = array.indexOf(item);
        return [...array.slice(0, index), ...array.slice(index + 1)];
    }
    renderWeekSelection() {
        const { days } = this.props.taskForm;
        return _.map(this.weekdays, (day) => {
            return (<View key={day}><Button
                bordered
                success
                onPress={() => this.toggleWeekday(day)}
            >
                <Text>{day}{days.indexOf(day) === -1 ? '' : '*'}</Text>
            </Button></View>);
        });
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
                {this.renderWeekSelection()}
                {/* <Text>{this.props.errorMessage}</Text> */}
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
    taskForm: state.taskForm,
    errorMessage: state.error ? state.error.message : ''
});
export default connect(mapStateToProp, { SetTaskFormProperties })(TaskForm);
