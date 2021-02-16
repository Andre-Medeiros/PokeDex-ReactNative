import React, { useEffect, useState } from 'react';
import Feed from './src/Views/Feed/Feed';
import Status from './src/Views/Status/Status';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListaPokemons'>
        <Stack.Screen 
          name='Feed' 
          component={Feed} 
          options={{headerShown:false}} 
        />
        <Stack.Screen 
          name='Status' 
          component={Status} 
          options={{headerShown:false}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
