import React, { Component } from 'react';
import { Text, Container, Left, Right, Content, List, ListItem, Icon } from 'native-base';
import { connect } from 'react-redux';
import NavigatorService from '../../services/NavigatorService';

class ParentsMenuScreen extends Component {
    static navigationOptions = {
        title: 'Control',
    };

    renderMenuItem(label, navigateTo) {
        return (
            <ListItem button onPress={() => { NavigatorService.navigate(navigateTo); }}>
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
                        {this.renderMenuItem('Kids', 'KidsScreen')}
                        {this.renderMenuItem('Task', 'TasksScreen')}
                        {this.renderMenuItem('Rewards')}
                        {this.renderMenuItem('Notifications')}
                    </List>
                </Content>
            </Container>
        );
    }
}

export default connect(null, null)(ParentsMenuScreen);
