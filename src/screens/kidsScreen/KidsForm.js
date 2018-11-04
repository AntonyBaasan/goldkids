import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'native-base';

class KidsForm extends Component {
    render() {
        return (
            <View>
                <Text >{this.props.kidsForm.id}</Text>
                <Text >{this.props.kidsForm.name}</Text>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({ kidsForm: state.kidsForm });
export default connect(mapStateToProp, null)(KidsForm);
