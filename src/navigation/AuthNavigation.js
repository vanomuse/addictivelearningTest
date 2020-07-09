import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LogIn from '../screens/auth/LogIn'
import SignUp from '../screens/auth/SignUp'
import Welcome from '../screens/auth/Welcome'
const AuthStack = createStackNavigator();

export default () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="LogIn"
      component={LogIn}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="Welcome"
      component={Welcome}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);
