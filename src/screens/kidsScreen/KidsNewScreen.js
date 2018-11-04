import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import KidsForm from './KidsForm';

class KidsEditScreen extends Component {

    render() {
        return (
            <View>
                <Text >Add child</Text>
                <KidsForm />
                <Button
                    bordered
                    success
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Text>Go back</Text>
                </Button>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
    kidsForm: state.kidsForm
});
export default connect(mapStateToProp, null)(KidsEditScreen);
