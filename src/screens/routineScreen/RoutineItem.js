import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'native-base';
import NavigatorService from '../../services/NavigatorService';
import { SetTaskFormProperties, ClearError } from '../../actions';


class RoutineItem extends Component {

    edit(id, task) {
        this.props.SetTaskFormProperties({ prop: 'id', value: id });
        this.props.SetTaskFormProperties({ prop: 'title', value: task.title });
        this.props.SetTaskFormProperties({ prop: 'days', value: task.days });
        this.props.SetTaskFormProperties({ prop: 'assigned', value: task.assigned });
        this.props.ClearError();
        NavigatorService.navigate('TaskEditScreen');
    }
    remove(task) {

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

export default connect(null, { SetTaskFormProperties, ClearError })(RoutineItem);
