import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{createAppContainer} from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './Home';
import AboutScreen from './about';
import SettingScreen from './Settings';
import LoginScreen from './Login';

// Establish a Variable
const tabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Settings: SettingScreen
})

// Recalling the tabNavigator 
export default createAppContainer(tabNavigator)



