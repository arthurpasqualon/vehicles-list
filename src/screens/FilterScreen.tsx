import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {FilterBy, RootStackParamList} from '../routes/types';
import Routes from '../routes/routes';
import FilterItem from '../components/filter-item/FilterItem';
import Button from '../components/button/Button';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import {
  clearMakeFilter,
  clearModelFilter,
  setMakeFilter,
  setModelFilter,
} from '../store/slices/filter/reducer';
import useGetFilterOptions from '../hooks/useGetFilterOptions';

const FiltersScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, Routes.FILTER>>();
  const navigation = useNavigation();
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

  const clearAll = () => {
    if (route.params.filterBy === FilterBy.MAKE) {
      dispatch(clearMakeFilter());
    }
    if (route.params.filterBy === FilterBy.MODEL) {
      dispatch(clearModelFilter());
    }
    navigation.goBack();
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
        ListFooterComponent={
          <View style={styles.floatingButtonContainer}>
            <Button
              title="Clear All Selections"
              onPress={clearAll}
              textColor="red"
            />
          </View>
        }
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#fff',
  },
  floatingButtonContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
