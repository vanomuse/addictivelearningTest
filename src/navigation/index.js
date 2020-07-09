import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStack from './AuthNavigation'
import AppNavigation from './AppNavigation'
const MainNavigation = createStackNavigator();

class App extends Component {
  
  render() {
    return (
        <NavigationContainer>
          <MainNavigation.Navigator >
            <MainNavigation.Screen
              name="Auth"
              component={AuthStack}
              options={{headerShown: false}}
            />
            <MainNavigation.Screen
              name="App"
              component={AppNavigation}
              options={{headerShown: false}}
            />
          </MainNavigation.Navigator>
        </NavigationContainer>
    );
  }
}
export default App;
