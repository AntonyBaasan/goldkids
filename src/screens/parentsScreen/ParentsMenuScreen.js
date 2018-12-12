import React, { Component } from 'react';
import { Text, Button, Container, Left, Right, Content, List, ListItem, Icon } from 'native-base';
import { connect } from 'react-redux';

class ParentsMenuScreen extends Component {
    renderMenuItem(label, navigateTo) {
        return (
            <ListItem button onPress={() => { }}>
                <Left>
                    <Text>{label}</Text>
                </Left>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>);
    }
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        {this.renderMenuItem('Kids')}
                        {this.renderMenuItem('Task')}
                        {this.renderMenuItem('Rewards')}
                        {this.renderMenuItem('Notifications')}
                    </List>
                </Content>
            </Container>
            // <View style={{ flex: 1 }}>
            //     <Text>Parents Menu Screen 2</Text>
            // </View>
        );
    }
}

export default connect(null, null)(ParentsMenuScreen);
