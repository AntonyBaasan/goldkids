import React, { Component } from 'react';
import { Text, View, Button } from 'native-base';


export class KidsScreen extends Component {
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
            </View>
        );
    }
}
