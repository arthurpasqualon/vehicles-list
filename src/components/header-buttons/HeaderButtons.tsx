import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/useReduxHooks';
import {colors} from '../../constants';
import {setFavouriteFilter} from '../../store/slices/filter/reducer';
import Routes from '../../routes/routes';
import {RootStackParamList} from '../../routes/types';

const HeaderButtons = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const isFavourite = useAppSelector(state => state.filterReducer.favourite);
  const favouriteIcon = isFavourite ? 'cards-heart' : 'cards-heart-outline';
  return (
    <View style={styles.container}>
      <Icon
        name={favouriteIcon}
        size={30}
        style={styles.icon}
        color={colors.white}
        onPress={() => dispatch(setFavouriteFilter())}
      />
      <Icon
        name="filter-variant"
        size={30}
        color={colors.white}
        onPress={() => navigation.navigate(Routes.FILTER_HOME)}
      />
    </View>
  );
};
export default HeaderButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
});
