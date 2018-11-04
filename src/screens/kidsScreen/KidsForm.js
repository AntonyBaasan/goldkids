import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import { TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import { SetKidsFormProperties } from '../../actions/index';

class KidsForm extends Component {
    changeName(text) {
        this.props.SetKidsFormProperties({ prop: 'name', value: text });
    }
    changeId(id) {
        this.props.SetKidsFormProperties({ prop: 'id', value: id });
    }
    options = {
        title: 'Select Avatar',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    chooseAvatar() {
        ImagePicker.showImagePicker(this.options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.props.SetKidsFormProperties({ prop: 'avatar', value: response.uri });
            }
        });
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
                <Image
                    source={{ uri: this.props.kidsForm.avatar }}
                    style={{ height: 100, width: 100 }}
                />
                <Button
                    onPress={() => this.chooseAvatar()}
                >
                    <Text>Avatar</Text>
                </Button>

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
