import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'native-base';
import KidsList from './KidsList';
import TodoList from './TodoList';


class TodoScreen extends Component {
    static navigationOptions = {
        title: 'Todo',
    };
    // componentDidMount() {
    //     if (this.props.displayDayOfWeek == null) {
    //         const today = new Date();
    //         this.selectWeekday(this.weekdays[today.getDay()]);
    //     }
    // }

    // selectWeekday(day) {
    //     console.log('day: ', day);
    //     this.props.selectTodoDisplayDay(day);
    // }

    // selectWeek(weekId) {
    //     console.log('weekId: ', weekId);
    //     this.props.selectTodoDisplayWeek(weekId);
    // }

    // renderWeekdays() {
    //     return _.map(this.weekdays, (day) => {
    //         const isActive = day === this.props.displayDayOfWeek;

    //         return (<Button
    //             key={day}
    //             bordered
    //             success={isActive}
    //             onPress={() => this.selectWeekday(day)}
    //         >
    //             <Text>{day}</Text>
    //         </Button>);
    //     });
    // }

    // renderWeeks() {
    //     return _.map(this.props.todoByWeek, (weekValues, weekId) => {
    //         const isActive = weekId === this.props.displayWeek;
    //         return (<Button
    //             key={weekId}
    //             bordered
    //             success={isActive}
    //             onPress={() => this.selectWeek(weekId)}
    //         >
    //             <Text>{weekId}{weekValues.isCurrent ? '*' : ''}</Text>
    //         </Button>);
    //     });
    // }

    render() {
        return (
            <View>
                <KidsList />
                <TodoList />
            </View>
        );
    }
}

const mapStateToProp = (state) => {
    const { displayKidId } = state.todoDisplay;
    return {
        displayKidId,
        todos: state.todo
    };
};

export default connect(mapStateToProp, null)(TodoScreen);
