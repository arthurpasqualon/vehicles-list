/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Routes from './routes';
import MainScreen from '../screens/MainScreen';
import FiltersScreen from '../screens/FilterScreen';
import DetailScreen from '../screens/DetailScreen';
import FilterHomeScreen from '../screens/FilterHomeScreen';
import {colors} from '../constants';
import HeaderButtons from '../components/header-buttons/HeaderButtons';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const headerOptions: NativeStackNavigationOptions = {
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.primary,
    },
  };
  return (
    <Stack.Navigator initialRouteName={Routes.MAIN}>
      <Stack.Screen
        name={Routes.MAIN}
        component={MainScreen}
        options={{
          headerTitle: 'Vehicles',
          headerTitleAlign: 'center',
          headerTintColor: colors.white,
          headerRight: () => <HeaderButtons />,
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      />
      <Stack.Screen
        name={Routes.FILTER_HOME}
        component={FilterHomeScreen}
        options={{
          headerTitle: 'Filters',
          animation: 'slide_from_bottom',
          ...headerOptions,
        }}
      />
      <Stack.Screen
        name={Routes.FILTER}
        component={FiltersScreen}
        options={{
          headerTitle: 'Options',
          ...headerOptions,
        }}
      />
      <Stack.Screen
        name={Routes.DETAIL}
        component={DetailScreen}
        options={{
          headerTitle: 'Vehicle Details',
          ...headerOptions,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
