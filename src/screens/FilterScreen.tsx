import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {FilterBy, RootStackParamList} from '../routes/types';
import Routes from '../routes/routes';
import useFilterOptions from '../hooks/useFilterOptions';
import FilterItem from '../components/filter-item/FilterItem';
import Button from '../components/button/Button';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import {setMakeFilter, setModelFilter} from '../store/slices/filter/reducer';

const FiltersScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, Routes.FILTER>>();
  const options = useFilterOptions(route.params.filterBy);
  const filter = useAppSelector(state => state.filterReducer);

  const selectedOption =
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
    <View style={styles.container}>
      <FlatList
        data={options}
        renderItem={({item}) => (
          <FilterItem
            title={item}
            onPress={onPress}
            isSelected={selectedOption === item}
          />
        )}
        keyExtractor={item => item}
      />
      <Button title="Apply" onPress={() => {}} />
    </View>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#fff',
  },
});
