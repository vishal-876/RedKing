import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import ResultScreen from './ResultScreen'
import GameScreen from './GameScreen'

const Tab = createMaterialTopTabNavigator();

export default function ExploreScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Game"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: { fontSize: 15,fontWeight:'bold' },
        tabBarStyle: { backgroundColor: '#fff' },
      }}
    >
      
      <Tab.Screen
        name="Game"
        component={GameScreen}
        options={{ tabBarLabel: 'Game' }}
      />
      <Tab.Screen
        name="Result"
        component={ResultScreen}
        options={{ tabBarLabel: 'Result' }}
      />
    </Tab.Navigator>
  );
}

