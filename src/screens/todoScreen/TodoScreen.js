import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import { selectTodoDisplayDay, selectTodoDisplayWeek } from '../../actions/todoDisplayActions';
import KidsList from './KidsList';
import KidsTodoList from './KidsTodoList';


class TodoScreen extends Component {

    componentWillMount() {
        this.weekdays = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
    }
    componentDidMount() {
        if (this.props.displayDayOfWeek == null) {
            const today = new Date();
            this.selectWeekday(this.weekdays[today.getDay()]);
        }
    }

    selectWeekday(day) {
        console.log('day: ', day);
        this.props.selectTodoDisplayDay(day);
    }

    selectWeek(weekId) {
        console.log('weekId: ', weekId);
        this.props.selectTodoDisplayWeek(weekId);
    }

    renderWeekdays() {
        return _.map(this.weekdays, (day) => {
            const isActive = day === this.props.displayDayOfWeek;

            return (<Button
                key={day}
                bordered
                success={isActive}
                onPress={() => this.selectWeekday(day)}
            >
                <Text>{day}</Text>
            </Button>);
        });
    }

    renderWeeks() {
        return _.map(this.props.todoByWeek, (weekValues, weekId) => {
            const isActive = weekId === this.props.displayWeek;
            return (<Button
                key={weekId}
                bordered
                success={isActive}
                onPress={() => this.selectWeek(weekId)}
            >
                <Text>{weekId}</Text>
            </Button>);
        });
    }

    render() {
        return (
            <View>
                {this.renderWeeks()}
                {this.renderWeekdays()}
                <KidsList />
                <KidsTodoList />
            </View>
        );
    }
}

const mapStateToProp = (state) => {
    const { displayDayOfWeek, displayWeek } = state.todoDisplay;
    return {
        displayDayOfWeek,
        displayWeek,
        todoByWeek: state.todo
    };
};

export default connect(mapStateToProp, { selectTodoDisplayDay, selectTodoDisplayWeek })(TodoScreen);
