import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './routes';
import MainScreen from '../screens/MainScreen';
import FiltersScreen from '../screens/FilterScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.MAIN}>
      <Stack.Screen name={Routes.MAIN} component={MainScreen} />
      <Stack.Screen name={Routes.FILTER} component={FiltersScreen} />
      <Stack.Screen name={Routes.DETAIL} component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
