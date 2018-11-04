import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, Button } from 'native-base';
import { connect } from 'react-redux';


class KidsScreen extends Component {

    editChild(kidId) {
        this.props.navigation.navigate('KidsEditScreen', { childId: kidId });
    }

    addChild() {
        this.props.navigation.navigate('KidsNewScreen');
    }

    renderKids() {
        return _.map(this.props.kids, (k, kidId) =>
            <View key={kidId}>
                <Button
                    bordered
                    success
                    onPress={() => this.editChild(k.id)}
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
export default connect(mapStateToProp, null)(KidsScreen);
