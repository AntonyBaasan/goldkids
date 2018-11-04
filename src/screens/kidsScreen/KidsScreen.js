import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, Button } from 'native-base';
import { connect } from 'react-redux';
import { SetKidsFormProperties } from '../../actions/index';

class KidsScreen extends Component {

    generateNewId() {
        return 'sadfas';
    }

    editChild(id, kid) {
        this.props.SetKidsFormProperties({ prop: 'id', value: id });
        this.props.SetKidsFormProperties({ prop: 'name', value: kid.name });
        this.props.navigation.navigate('KidsEditScreen');
    }

    addChild() {
        this.props.SetKidsFormProperties({ prop: 'id', value: this.generateNewId() });
        this.props.SetKidsFormProperties({ prop: 'name', value: '' });
        this.props.navigation.navigate('KidsNewScreen');
    }

    renderKids() {
        return _.map(this.props.kids, (k, kidId) =>
            <View key={kidId}>
                <Button
                    bordered
                    success
                    onPress={() => this.editChild(kidId, k)}
                >
                    <Text> Go to {k.name} </Text>
                </Button>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Kids Screen 2</Text>
                {this.renderKids()}
                <Button
                    onPress={() => this.addChild()}
                >
                    <Text>Insert Child</Text>
                </Button>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
    kids: state.kids,
});
export default connect(mapStateToProp, { SetKidsFormProperties })(KidsScreen);
