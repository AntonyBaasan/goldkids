import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import { selectTodoDisplayKid } from '../../actions/todoDisplayActions';

class KidsList extends Component {

    getStatistics(kidId) {
        const { statistics, displayWeek } = this.props;
        if (statistics[kidId] && statistics[kidId][displayWeek]) {
            const stat = statistics[kidId][displayWeek];
            return `${stat.done}/${stat.planned}`;
        }
        return '0/0';
    }

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
                <Text>{kidInfo.name}-{this.getStatistics(kidId)}</Text>
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
    const { displayKidId, displayWeek } = state.todoDisplay;
    return {
        kids: state.kids,
        displayKidId,
        statistics: state.statistics,
        displayWeek
    };
};

export default connect(mapStateToProp, { selectTodoDisplayKid })(KidsList);
