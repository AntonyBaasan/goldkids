import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import { selectTodoDisplayKid } from '../../actions/todoDisplayActions';

class KidsList extends Component {

    componentWillMount() {
    }

    selectDisplayKid(kidId) {
        this.props.selectTodoDisplayKid(kidId);
    }

    renderKids() {
        return _.map(this.props.kids, (kidInfo, kidId) => (<View key={kidId}>
                <Button
                    success={this.props.displayKidId === kidId}
                    onPress={() => this.selectDisplayKid(kidId)}
                >
                    <Text>{kidInfo.name}</Text>
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
        displayKidId: displayKidId || Object.keys(state.kids)[0]
    };
};

export default connect(mapStateToProp, { selectTodoDisplayKid })(KidsList);
