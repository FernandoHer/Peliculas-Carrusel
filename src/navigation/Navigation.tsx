/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens } from '../screens/HomeScreens';
import { DetailScreens } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams ={
  HomeScreens: undefined,
  DetailScreens: Movie,
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions= {{
        headerShown: false,
        cardStyle:{
          // backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="HomeScreens" component={HomeScreens} />
      <Stack.Screen name="DetailScreens" component={DetailScreens} />
    </Stack.Navigator>
  );
};
