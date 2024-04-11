import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Vehicle} from '../../types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ListItemProps {
  vehicle: Vehicle;
}

const ListItem: React.FC<ListItemProps> = ({vehicle}) => {
  const {make, model} = vehicle;
  return (
    <View style={styles.container}>
      <Icon name="camera-off-outline" size={24} color="#5A5A5A" />
      <Text style={styles.name}>{`${make} - ${model}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 12,
    marginHorizontal: 12,
  },
  name: {
    flex: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    fontSize: 16,
    fontWeight: '500',
    color: '#5A5A5A',
  },
  code: {
    flex: 1,
    fontSize: 16,
  },
});

export default ListItem;
