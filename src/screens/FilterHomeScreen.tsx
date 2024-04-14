import React, {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxHooks';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FilterBy, RootStackParamList} from '../routes/types';
import {
  clearAllFilters,
  setStartingBidFilter,
} from '../store/slices/filter/reducer';
import Routes from '../routes/routes';
import Button from '../components/button/Button';
import {StyleSheet, Text, View} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import {MAXIMUM_VALUE, MINIMUM_VALUE} from '../constants';

const STEP_SLIDER = 50;
const FilterHomeScreen = () => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {startingBid, make, model} = useAppSelector(
    state => state.filterReducer,
  );
  const [low, setLow] = React.useState(startingBid.min);
  const [high, setHigh] = React.useState(startingBid.max);

  const hasMakeFilter = make.length > 0;
  const hasModelFilter = model.length > 0;

  const setStartBidValues = () => {
    dispatch(setStartingBidFilter({min: low, max: high}));
    navigation.goBack();
  };

  const clearAll = () => {
    dispatch(clearAllFilters());
    navigation.goBack();
  };

  const handleValueChange = useCallback((values: number[]) => {
    setLow(values[0]);
    setHigh(values[1]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Starting bid range</Text>
      <Slider
        animateTransitions
        maximumTrackTintColor="#d3d3d3"
        maximumValue={MAXIMUM_VALUE}
        value={[low, high]}
        minimumTrackTintColor="#da291c"
        minimumValue={MINIMUM_VALUE}
        step={STEP_SLIDER}
        onValueChange={handleValueChange}
        thumbTintColor="#da291c"
      />
      <Text style={styles.rangeText}>
        ${low} - ${high}
      </Text>
      <View style={styles.separator} />
      <Text style={styles.sectionTitle}>Filter by:</Text>
      <Button
        title={`Filter by Make ${make.length > 0 ? `(${make.length})` : ''}`}
        iconLeft="flag"
        iconRight="filter-variant"
        textColor={hasMakeFilter ? '#ffffff' : '#ffffff70'}
        onPress={() => {
          navigation.navigate(Routes.FILTER, {filterBy: FilterBy.MAKE});
        }}
      />
      <Button
        title={`Filter by Model ${model.length > 0 ? `(${model.length})` : ''}`}
        iconLeft="car"
        iconRight="filter-variant"
        textColor={hasModelFilter ? '#ffffff' : '#ffffff70'}
        onPress={() => {
          navigation.navigate(Routes.FILTER, {filterBy: FilterBy.MODEL});
        }}
      />
      <View style={styles.separator} />
      <Button title="Clear all filters" onPress={clearAll} />
      <Button title="Done" onPress={setStartBidValues} />
    </View>
  );
};

export default FilterHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#152d6d',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    marginTop: 12,
    marginBottom: 18,
    fontWeight: 'bold',
  },
  rangeText: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
    fontSize: 16,
  },
  separator: {
    marginTop: 12,
    marginBottom: 24,
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '100%',
  },
});
