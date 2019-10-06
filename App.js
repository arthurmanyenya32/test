import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

// Import the Welcoming Page and Tabs
import LoginScreen from './Login';
import tabs from './tabs';

const stackNavigator = createStackNavigator({
  Login: LoginScreen,
  tabs: tabs
})


// Recalling the tabNavigator 
export default createAppContainer(stackNavigator)



