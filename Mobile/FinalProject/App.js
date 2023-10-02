import 'react-native-gesture-handler';

import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const DrawerStack = createDrawerNavigator();
const { Navigator, Screen } = DrawerStack;

// Components...!
import Home from "./src/components/home/home"
import About from "./src/components/about/about"

const App = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='about' component={About} />
        <Screen name='home' component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;