import _ from 'lodash';
import uuid from 'uuid/v1';
import React, { Component } from 'react';
import { Text, View, Button } from 'native-base';
import { connect } from 'react-redux';
import { SetKidsFormProperties, ClearError } from '../../actions/index';
import KidsList from './KidsList';

class KidsScreen extends Component {
    static navigationOptions = {
        title: 'Kids',
    };

    addChild() {
        _.map({
            id: uuid(),
            name: '',
            avatar: '',
        }, (value, key) => { this.props.SetKidsFormProperties({ prop: key, value }); });
        this.props.ClearError();
        this.props.navigation.navigate('KidsNewScreen');
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Kids Screen 2</Text>
                <KidsList />
                <Button
                    onPress={() => this.addChild()}
                >
                    <Text>New</Text>
                </Button>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
    kids: state.kids,
});
export default connect(mapStateToProp, { SetKidsFormProperties, ClearError })(KidsScreen);
