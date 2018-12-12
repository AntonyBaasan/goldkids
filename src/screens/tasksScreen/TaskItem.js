import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'native-base';
import NavigatorService from '../../services/NavigatorService';
import { SetTaskFormProperties, ClearError } from '../../actions';

class TaskItem extends Component {

    edit(id, task) {
        _.map({
            id,
            title: task.title,
            days: task.days,
            assigned: task.assigned,
        }, (value, key) => { this.props.SetTaskFormProperties({ prop: key, value }); });

        this.props.ClearError();
        NavigatorService.navigate('TaskEditScreen');
    }

    remove() {
    }

    render() {
        const { task, id } = this.props;
        return (
            <View>
                <Text>{id}:{task.title}</Text>
                <Button
                    bordered
                    success
                    onPress={() => this.edit(id, task)}
                >
                    <Text>Edit</Text>
                </Button>
                <Button
                    bordered
                    danger
                    onPress={() => this.remove(task)}
                >
                    <Text>Remove</Text>
                </Button>

            </View>
        );
    }
}

export default connect(null, { SetTaskFormProperties, ClearError })(TaskItem);
