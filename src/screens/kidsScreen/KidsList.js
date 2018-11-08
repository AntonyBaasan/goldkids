import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, Button, Container, Card, CardItem, Left, Thumbnail, Body } from 'native-base';
import { connect } from 'react-redux';
import NavigatorService from '../../services/NavigatorService';
import { SetKidsFormProperties, ClearError } from '../../actions/index';

class KidsList extends Component {

    editChild(id, kid) {
        _.map({
            id,
            name: kid.name,
            avatar: kid.avatar,
        }, (value, key) => { this.props.SetKidsFormProperties({ prop: key, value }); });

        this.props.ClearError();
        NavigatorService.navigate('KidsEditScreen');
    }

    renderKids() {
        return _.map(this.props.kids, (kid, kidId) =>
            <CardItem key={kidId}>
                <Left>
                    <Thumbnail source={{ uri: kid.avatar }} />
                    <Body>
                        <Text>{kid.name}</Text>
                        <Text note>stat</Text>
                        <Button
                            bordered
                            success
                            onPress={() => this.editChild(kidId, kid)}
                        >
                            <Text>Edit</Text>
                        </Button>
                        <Button
                            bordered
                            danger
                            onPress={() => this.editChild(kidId, kid)}
                        >
                            <Text>Remove</Text>
                        </Button>
                    </Body>
                </Left>
            </CardItem>
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Container>
                    <Card>
                        {this.renderKids()}
                    </Card>
                </Container>
            </View>
        );
    }
}

const mapStateToProp = (state) => ({
    kids: state.kids,
});
export default connect(mapStateToProp, { SetKidsFormProperties, ClearError })(KidsList);
