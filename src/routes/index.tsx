/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Routes from './routes';
import MainScreen from '../screens/MainScreen';
import FiltersScreen from '../screens/FilterScreen';
import DetailScreen from '../screens/DetailScreen';
import {RootStackParamList} from './types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import FilterHomeScreen from '../screens/FilterHomeScreen';
import {View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import {setFavouriteFilter} from '../store/slices/filter/reducer';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const isFavourite = useAppSelector(state => state.filterReducer.favourite);
  const favouriteIcon = isFavourite ? 'cards-heart' : 'cards-heart-outline';
  const headerOptions: NativeStackNavigationOptions = {
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#152d6d',
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
          headerTintColor: '#fff',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={favouriteIcon}
                size={30}
                style={{marginRight: 10}}
                color="#fff"
                onPress={() => dispatch(setFavouriteFilter())}
              />
              <Icon
                name="filter-variant"
                size={30}
                color="#fff"
                onPress={() => navigation.navigate(Routes.FILTER_HOME)}
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#152d6d',
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
