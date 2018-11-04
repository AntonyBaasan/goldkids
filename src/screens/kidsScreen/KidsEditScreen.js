import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import KidsForm from './KidsForm';
import { UpdateKidByKidsForm } from '../../actions/index';

class KidsNewScreen extends Component {

    save() {
        this.props.UpdateKidByKidsForm();
    }
    delete() {
        // this.props.navigation.goBack();
    }

    render() {
        return (
            <View>
                <Text >Edit child</Text>
                <KidsForm />
                <Button
                    bordered
                    success
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Text>Go back</Text>
                </Button>
                <Button
                    bordered
                    onPress={() => this.save()}
                >
                    <Text>Save</Text>
                </Button>
                <Button
                    bordered
                    onPress={() => this.delete()}
                >
                    <Text>Remove</Text>
                </Button>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
    kidsForm: state.kidsForm
});
export default connect(mapStateToProp, { UpdateKidByKidsForm })(KidsNewScreen);
