import React, { Component } from 'react';
// import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import {
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation';
import NavigatorService from '../../services/NavigatorService';
import TodoScreen from '../todoScreen/TodoScreen';
import { KidsScreen, KidsEditScreen, KidsNewScreen } from '../kidsScreen';
import { RoutineScreen, TaskEditScreen } from '../routineScreen';


export default class RootScreen extends Component {
    render() {
        return (
            <RootStack
                ref={navigatorRef => { NavigatorService.setTopLevelNavigator(navigatorRef); }}
            />
        );
    }
}

const TodoStack = createStackNavigator({
    TodoScreen,
    // Details: DetailsScreen,
});

const KidsStack = createStackNavigator({
    KidsScreen,
    KidsEditScreen,
    KidsNewScreen,
});

const RoutineStack = createStackNavigator({
    RoutineScreen,
    TaskEditScreen,
});

const RootStack = createBottomTabNavigator(
    {
        Todo: TodoStack,
        Kids: KidsStack,
        Routine: RoutineStack,
    },
    {
        /* Other configuration remains unchanged */
    }
);
