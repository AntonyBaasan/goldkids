import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Text, View } from 'native-base';
import { SetKidsFormProperties } from '../../actions/index';

class KidsForm extends Component {
    changeName(text) {
        this.props.SetKidsFormProperties({ prop: 'name', value: text });
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
    kidsForm: state.kidsForm,
    errorMessage: state.error ? state.error.message : ''
});
export default connect(mapStateToProp, { SetKidsFormProperties })(KidsForm);
