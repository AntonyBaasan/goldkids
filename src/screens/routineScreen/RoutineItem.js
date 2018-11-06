import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'native-base';


class RoutineItem extends Component {

    edit(task) {

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
                    onPress={() => this.edit(task)}
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

export default connect(null, null)(RoutineItem);
