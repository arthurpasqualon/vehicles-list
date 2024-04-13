import React, {memo} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Vehicle} from '../../types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Routes from '../../routes/routes';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/types';
import {useAppDispatch} from '../../hooks/useReduxHooks';
import {toggleFavourite} from '../../store/slices/vehicles';

interface ListItemProps {
  vehicle: Vehicle;
  index: number;
}

const ListItem: React.FC<ListItemProps> = ({vehicle, index}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {make, model} = vehicle;
  const dispatch = useAppDispatch();
  const isFavourite = vehicle.favourite;
  const favouriteIcon = isFavourite ? 'cards-heart' : 'cards-heart-outline';

  const navigateToDetails = () => {
    navigation.navigate(Routes.DETAIL, {vehicle});
  };

  const onTooggleFavourite = () => {
    dispatch(toggleFavourite(index));
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navigateToDetails}>
      <Icon name="camera-off-outline" size={24} color="#5A5A5A" />
      <Text style={styles.name}>{`${make} - ${model}`}</Text>
      <Icon
        name={favouriteIcon}
        onPress={onTooggleFavourite}
        size={24}
        color="#5A5A5A"
      />
      <Icon name="chevron-right" size={24} color="#5A5A5A" />
    </TouchableOpacity>
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

export default memo(ListItem);
