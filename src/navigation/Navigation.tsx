/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens } from '../screens/HomeScreens';
import { DetailScreens } from '../screens/DetailScreen';


const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screnOptions= {{
        headerShown: false,
        cardStyle:{
          backgroundColor: 'white',
        }
      }}
    >
      <Stack.Screen name="HomeScreens" component={HomeScreens} />
      <Stack.Screen name="DetailScreens" component={DetailScreens} />
    </Stack.Navigator>
  );
};
