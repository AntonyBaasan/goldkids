import React, { Component } from 'react';
// import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import {
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation';
import NavigatorService from '../../services/NavigatorService';
import TodoScreen from '../todoScreen/TodoScreen';
import { KidsScreen, KidsEditScreen, KidsNewScreen } from '../kidsScreen';
import { TaskEditScreen, TaskNewScreen, RoutineScreen } from '../routineScreen';
import { ParentsMenuScreen } from '../parentsScreen';
import { RewardsScreen } from '../rewardsScreen';

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
    // TodoSuccessScreen,
});

const RewardsStack = createStackNavigator({
    RewardsScreen,
});

const ParentsStack = createStackNavigator({
    ParentsMenuScreen,
    //task menus
    RoutineScreen,
    TaskEditScreen,
    TaskNewScreen,
    //kids menu
    KidsScreen,
    KidsEditScreen,
    KidsNewScreen,
});

const RootStack = createBottomTabNavigator(
    {
        Todo: TodoStack,
        Rewards: RewardsStack,
        Parents: ParentsStack,
    },
    {
        /* Other configuration remains unchanged */
    }
);
