import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import { selectTodoDisplayKid } from '../../actions/todoDisplayActions';

class KidsList extends Component {

    selectDisplayKid(kidId) {
        this.props.selectTodoDisplayKid(kidId);
    }

    renderKids() {
        const { displayKidId } = this.props;
        return _.map(this.props.kids, (kidInfo, kidId) => (<View key={kidId}>
            <Button
                success={displayKidId === kidId}
                onPress={() => this.selectDisplayKid(kidId)}
            >
                <Text>{kidInfo.name}-{kidInfo.coins}</Text>
            </Button>
        </View>));
    }

    render() {
        return (
            <View>
                {this.renderKids()}
            </View>
        );
    }
}

const mapStateToProp = (state) => {
    const { displayKidId } = state.todoDisplay;
    return {
        kids: state.kids,
        displayKidId,
    };
};

export default connect(mapStateToProp, { selectTodoDisplayKid })(KidsList);
