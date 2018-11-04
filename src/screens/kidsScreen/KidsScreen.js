import uuid from 'uuid/v1';
import React, { Component } from 'react';
import { Text, View, Button } from 'native-base';
import { connect } from 'react-redux';
import { SetKidsFormProperties, ClearError } from '../../actions/index';
import KidsList from './KidsList';

class KidsScreen extends Component {

    addChild() {
        this.props.SetKidsFormProperties({ prop: 'id', value: uuid() });
        this.props.SetKidsFormProperties({ prop: 'name', value: '' });
        this.props.SetKidsFormProperties({ prop: 'avatar', value: '' });
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
                    <Text>Add New</Text>
                </Button>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
    kids: state.kids,
});
export default connect(mapStateToProp, { SetKidsFormProperties, ClearError })(KidsScreen);
