import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, Button } from 'native-base';
import { connect } from 'react-redux';


class KidsScreen extends Component {

    renderKids() {
        return _.map(this.props.kids, (k, kidId) =>
            <View key={kidId}>
                <Button
                    bordered
                    success
                    onPress={() => this.props.navigation.navigate('KidsEditScreen', { childId: k.id })}
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
                    onPress={() => this.props.navigation.navigate('KidsNewScreen')}
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
