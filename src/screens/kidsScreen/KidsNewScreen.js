import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import KidsForm from './KidsForm';
import { InsertNewKidByKidsForm } from '../../actions/index';

class KidsEditScreen extends Component {

    saveNew() {
        this.props.InsertNewKidByKidsForm();
    }
    render() {
        return (
            <View>
                <Text >Add child</Text>
                <KidsForm />
                <Button
                    bordered
                    onPress={() => this.saveNew()}
                >
                    <Text>Add</Text>
                </Button>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
    kidsForm: state.kidsForm
});
export default connect(mapStateToProp, { InsertNewKidByKidsForm })(KidsEditScreen);
