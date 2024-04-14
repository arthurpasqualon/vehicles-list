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
import {StyleSheet, View} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import {MAXIMUM_VALUE, MINIMUM_VALUE} from '../constants';

const FilterHomeScreen = () => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const range = useAppSelector(state => state.filterReducer.startingBid);
  const [low, setLow] = React.useState(range.min);
  const [high, setHigh] = React.useState(range.max);

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
      <Button
        title="Filter by Make"
        onPress={() => {
          navigation.navigate(Routes.FILTER, {filterBy: FilterBy.MAKE});
        }}
      />
      <Button
        title="Filter by Model"
        onPress={() => {
          navigation.navigate(Routes.FILTER, {filterBy: FilterBy.MODEL});
        }}
      />
      <Slider
        animateTransitions
        maximumTrackTintColor="#d3d3d3"
        maximumValue={MAXIMUM_VALUE}
        value={[low, high]}
        minimumTrackTintColor="#da291c"
        minimumValue={MINIMUM_VALUE}
        step={50}
        onValueChange={handleValueChange}
        thumbTintColor="#da291c"
      />
      <Button title="Confirm" onPress={setStartBidValues} />
      <Button title="Clear all filters" onPress={clearAll} />
    </View>
  );
};

export default FilterHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: '#152d6d',
  },
});
