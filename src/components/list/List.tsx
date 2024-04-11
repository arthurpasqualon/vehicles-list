import React from 'react';
import {FlatList} from 'react-native';

import {Vehicle} from '../../types';
import ListItem from '../list-item/ListItem';
import vehicleKeyExtractor from '../../helpers/vehicleKeyExtractor';

interface ListProps {
  vehicles: Vehicle[];
}

const List: React.FC<ListProps> = ({vehicles}) => {
  return (
    <FlatList
      data={vehicles}
      // TODO: Implement list improvement here
      renderItem={({item}) => <ListItem vehicle={item} />}
      keyExtractor={item => vehicleKeyExtractor(item)}
    />
  );
};

export default List;
