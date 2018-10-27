import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'native-base';
import { selectTodoDisplayDay } from '../../actions/todoDisplayActions';
import KidsList from './KidsList';
import KidsTodoList from './KidsTodoList';


class TodoScreen extends Component {

    componentWillMount() {
        this.weekdays = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'];
    }
    componentDidMount() {
        if (this.props.displayDayOfWeek == null) {
            const today = new Date();
            this.selectWeekday(this.weekdays[today.getDay() - 1]);
        }
    }

    selectWeekday(day) {
        console.log('day: ', day);
        this.props.selectTodoDisplayDay(day);
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

    render() {
        return (
            <View>
                {this.renderWeekdays()}
                <KidsList />
                <KidsTodoList />
            </View>
        );
    }
}

const mapStateToProp = (state) => {
    const { kidsTasks } = state.todo;
    const { displayDayOfWeek } = state.todoDisplay;
    return {
        kidsTasks,
        displayDayOfWeek,
    };
};

export default connect(mapStateToProp, { selectTodoDisplayDay })(TodoScreen);
