import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import { TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import { SetKidsFormProperties } from '../../actions/index';

class TaskForm extends Component {
    changeName(text) {
        this.props.SetKidsFormProperties({ prop: 'title', value: text });
    }
    changeId(id) {
        this.props.SetKidsFormProperties({ prop: 'id', value: id });
    }
    render() {
        const { id, name } = this.props.kidsForm;
        return (
            <View>
                <TextInput
                    onChangeText={(newId) => { this.changeId(newId); }}
                    value={id}
                />
                <TextInput
                    onChangeText={(text) => { this.changeName(text); }}
                    value={name}
                />

                <Text>{this.props.errorMessage}</Text>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
});
export default connect(mapStateToProp, { SetKidsFormProperties })(TaskForm);
