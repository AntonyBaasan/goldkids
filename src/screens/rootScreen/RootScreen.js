import React, { Component } from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation';
import NavigatorService from '../../services/NavigatorService';
import TodoScreen from '../todoScreen/TodoScreen';
import { KidsScreen, KidsEditScreen, KidsNewScreen } from '../kidsScreen';
import { TaskEditScreen, TaskNewScreen, TasksScreen } from '../tasksScreen';
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
    TodoScreen
    // TodoSuccessScreen,
});

const RewardsStack = createStackNavigator({
    RewardsScreen,
});

const ParentsStack = createStackNavigator({
    ParentsMenuScreen,
    //task menus
    TasksScreen,
    TaskEditScreen,
    TaskNewScreen,
    //kids menu
    KidsScreen,
    KidsEditScreen,
    KidsNewScreen,
}, {
        title: 'Parent Control'
    });

const RootStack = createBottomTabNavigator(
    {
        Todo: TodoStack,
        Rewards: RewardsStack,
        Parents: {
            screen: ParentsStack,
            navigationOptions: () => ({
                title: 'Parent Control',
            })
        },
    },
    {
        /* Other configuration remains unchanged */
    }
);
