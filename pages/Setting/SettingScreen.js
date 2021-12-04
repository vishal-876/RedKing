import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoneySrceen from './MoneyScreen';
import ProfileScreen from './ProfileScreen';
import { Ionicons } from '@expo/vector-icons';


const Tab = createMaterialTopTabNavigator();

export default function SettingScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Money"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: { fontSize: 15,fontWeight:'bold' },
        tabBarStyle: { backgroundColor: '#fff' },
      }}
    >
      <Tab.Screen
        name="Money"
        component={MoneySrceen}
        options={{ tabBarLabel: 'Money' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

