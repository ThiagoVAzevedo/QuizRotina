// Navigation.js

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Cadastro from './Cadastro';
import App from './App';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="App" component={App} />
        {/* Outras telas aqui */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
