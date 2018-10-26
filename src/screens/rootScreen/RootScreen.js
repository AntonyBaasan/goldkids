import React, { Component } from 'react';
// import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import {
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation';
import TodoScreen from '../todoScreen/TodoScreen';
import { KidsScreen, KidsDetailsScreen } from '../kidsScreen';
import PlanScreen from '../planScreen/PlanScreen';


export default class RootScreen extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}

const TodoStack = createStackNavigator({
    Todo: TodoScreen,
    // Details: DetailsScreen,
});

const KidsStack = createStackNavigator({
    Kids: KidsScreen,
    KidsDetails: KidsDetailsScreen,
});

const PlanStack = createStackNavigator({
    Plan: PlanScreen,
    // Details: DetailsScreen,
});

const RootStack = createBottomTabNavigator(
    {
        Todo: TodoStack,
        Kids: KidsStack,
        Plan: PlanStack,
    },
    {
        /* Other configuration remains unchanged */
    }
);
