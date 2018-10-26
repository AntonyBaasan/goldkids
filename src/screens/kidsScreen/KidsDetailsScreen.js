import React, { Component } from 'react';
import { Text, View, Button } from 'native-base';


export class KidsDetailsScreen extends Component {
    render() {
        return (
            <View>
                <Text >Kids Details</Text>
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
