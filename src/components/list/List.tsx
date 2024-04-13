import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {Vehicle} from '../../types';
import ListItem from '../list-item/ListItem';
import vehicleKeyExtractor from '../../helpers/vehicleKeyExtractor';
import Button from '../button/Button';
import {useAppDispatch} from '../../hooks/useReduxHooks';
import {clearAllFilters} from '../../store/slices/filter/reducer';

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
      renderItem={({item, index}) => <ListItem vehicle={item} index={index} />}
      ListEmptyComponent={
        <View style={styles.emptyList}>
          <Text style={styles.emptyListTitle}>No vehicles found</Text>
          <Text style={styles.emptyListDescription}>
            Clear your filters to be able to see results
          </Text>
          <Button title="Clear filters" onPress={clearFilters} />
        </View>
      }
      keyExtractor={item => vehicleKeyExtractor(item)}
    />
  );
};

const styles = StyleSheet.create({
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  emptyListDescription: {
    fontSize: 16,
    color: '#5A5A5A',
  },
});

export default List;
