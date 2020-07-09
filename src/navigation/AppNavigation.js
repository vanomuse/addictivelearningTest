import React from 'react';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Main from '../screens/main/Main'
import Settings from '../screens/main/Settings'

const windowHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

function AppNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: '#008f7b',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: windowHeight * 0.1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabStyle: {
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>

      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({ }) =>
            <Icon name='home' size={40} color='white' />
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ }) =>
            <Icon name='sliders' size={40} color='white' />
        }}
      />
    </Tab.Navigator>
  );
}
export default AppNavigation;
