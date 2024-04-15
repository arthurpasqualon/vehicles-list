import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {Vehicle} from '../../types';
import ListItem from '../list-item/ListItem';
import vehicleKeyExtractor from '../../helpers/vehicleKeyExtractor';
import {useAppDispatch} from '../../hooks/useReduxHooks';
import {clearAllFilters} from '../../store/slices/filter/reducer';
import {colors} from '../../constants';

interface ListProps {
  vehicles: Vehicle[];
}

const List: React.FC<ListProps> = ({vehicles}) => {
  const dispatch = useAppDispatch();

  const clearFilters = () => {
    dispatch(clearAllFilters());
  };

  return (
    <FlatList
      data={vehicles}
      renderItem={({item}) => <ListItem vehicle={item} />}
      ListEmptyComponent={
        <View style={styles.emptyList}>
          <Text style={styles.emptyListTitle}>No vehicles found</Text>
          <Text style={styles.emptyListDescription}>
            Clear your filters to be able to see results
          </Text>
          <View style={styles.clearAllContainer}>
            <Text style={styles.clearAllText} onPress={clearFilters}>
              Clear filters
            </Text>
          </View>
        </View>
      }
      keyExtractor={item => vehicleKeyExtractor(item)}
    />
  );
};

const styles = StyleSheet.create({
  emptyList: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListTitle: {
    fontSize: 24,
    color: colors.darkGrey,
    fontWeight: 'bold',
  },
  emptyListDescription: {
    fontSize: 16,
    color: colors.darkGrey,
  },
  clearAllContainer: {
    height: 48,
    alignItems: 'center',
    marginTop: 24,
    justifyContent: 'center',
  },
  clearAllText: {
    fontSize: 16,
    color: colors.primary,
    textAlign: 'center',
    flex: 1,
  },
});

export default List;
