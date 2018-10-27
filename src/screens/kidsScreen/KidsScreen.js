import React, { Component } from 'react';
import { Text, View, Button } from 'native-base';
import { connect } from 'react-redux';


class KidsScreen extends Component {

    renderKids() {
        return (<Text>{this.props.kids[0].name}</Text>);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Kids Screen 2</Text>
                <Button
                    bordered
                    success
                    onPress={() => this.props.navigation.navigate('KidsDetails')}
                >
                    <Text> Go to Buyan </Text>
                </Button>
                {this.renderKids()}
            </View>
        );
    }
}

const mapStateToProp = (state) => ({ kids: state.kids });
export default connect(mapStateToProp, null)(KidsScreen);
