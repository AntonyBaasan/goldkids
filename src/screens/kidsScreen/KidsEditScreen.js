import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import KidsForm from './KidsForm';
import { UpdateKidByKidsForm } from '../../actions/index';

class KidsNewScreen extends Component {

    save() {
        this.props.UpdateKidByKidsForm();
    }

    render() {
        return (
            <View>
                <Text >Edit child</Text>
                <KidsForm />
                <Button
                    bordered
                    onPress={() => this.save()}
                >
                    <Text>Save</Text>
                </Button>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
    kidsForm: state.kidsForm
});
export default connect(mapStateToProp, { UpdateKidByKidsForm })(KidsNewScreen);
