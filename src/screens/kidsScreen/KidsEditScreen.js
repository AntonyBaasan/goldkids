import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import KidsForm from './KidsForm';

class KidsNewScreen extends Component {
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
            </View>
        );
    }
}

const mapStateToProp = (state) => {
    // const mapStateToProp = (state, ownProp) => {
    // const { navigation } = ownProp;
    // const childId = navigation.getParam('childId');
    return {
        // kid: _.find(state.kids, k => k.id === childId)
        kidsForm: state.kidsForm
    };
};
export default connect(mapStateToProp, null)(KidsNewScreen);
