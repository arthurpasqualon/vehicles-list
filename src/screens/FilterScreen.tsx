import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';
import {FilterBy, RootStackParamList} from '../routes/types';
import Routes from '../routes/routes';
import FilterItem from '../components/filter-item/FilterItem';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import {setMakeFilter, setModelFilter} from '../store/slices/filter/reducer';
import useGetFilterOptions from '../hooks/useGetFilterOptions';
import {colors} from '../constants';

const FiltersScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, Routes.FILTER>>();

  const options = useGetFilterOptions(route.params.filterBy);
  const filter = useAppSelector(state => state.filterReducer);

  const selectedOptions =
    route.params.filterBy === FilterBy.MAKE ? filter.make : filter.model;

  const dispatch = useAppDispatch();

  const onPress = (option: string) => {
    if (route.params.filterBy === FilterBy.MAKE) {
      dispatch(setMakeFilter(option));
    }
    if (route.params.filterBy === FilterBy.MODEL) {
      dispatch(setModelFilter(option));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={options}
        renderItem={({item}) => {
          const isSelected = selectedOptions.includes(item);
          return (
            <FilterItem
              title={item}
              onPress={onPress}
              isSelected={isSelected}
            />
          );
        }}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: colors.primary,
  },
  floatingButtonContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
