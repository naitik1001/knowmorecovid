import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';    

import VariantScreen from "./screens/Variant";
import TestingScreen from "./screens/Testing";
import PreventScreen from "./screens/Prevent";
import HomeScreen from "./screens/Home";
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Variant" component={VariantScreen} />
        <Stack.Screen name="Prevent" component={PreventScreen} />
        <Stack.Screen name="Test" component={TestingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;