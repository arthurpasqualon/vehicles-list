import React, {memo} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Vehicle} from '../../types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Routes from '../../routes/routes';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/types';
import {useAppDispatch} from '../../hooks/useReduxHooks';
import {toggleFavourite} from '../../store/slices/vehicles';
import dayjs from 'dayjs';
import {colors} from '../../constants';

interface ListItemProps {
  vehicle: Vehicle;
}

const HOURS_IN_A_DAY = 24;

const ListItem: React.FC<ListItemProps> = ({vehicle}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {make, model, year, auctionDateTime, startingBid} = vehicle;
  const dispatch = useAppDispatch();
  const isFavourite = vehicle.favourite;
  const favouriteIcon = isFavourite ? 'cards-heart' : 'cards-heart-outline';
  const today = dayjs();

  const auctionRemainingHours = dayjs(auctionDateTime).diff(today, 'hours');
  const isAuctionActive = auctionRemainingHours < 0;
  const auctionRemainingDays = auctionRemainingHours / HOURS_IN_A_DAY;

  const auctionRemainingTime =
    auctionRemainingDays > 1
      ? `${Math.floor(auctionRemainingDays)} days`
      : `${auctionRemainingHours} hours`;

  const auctionStartedTitle = isAuctionActive
    ? 'Auction already started'
    : `Auction starts in ${auctionRemainingTime}`;

  const navigateToDetails = () => {
    navigation.navigate(Routes.DETAIL, {vehicle});
  };

  const onToggleFavourite = () => {
    dispatch(toggleFavourite(vehicle));
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navigateToDetails}>
      <View style={styles.photoContainer}>
        <Icon name="camera-off-outline" size={48} color={colors.mediumGrey} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.startingBid}>$ {startingBid}</Text>
        <Text style={styles.title}>{model}</Text>
        <Text style={styles.description}>
          {make} - {year}
        </Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detail}>{auctionStartedTitle}</Text>
        </View>
      </View>
      <Icon
        name={favouriteIcon}
        onPress={onToggleFavourite}
        size={24}
        color={colors.secondary}
      />
      <Icon name="chevron-right" size={24} color={colors.mediumGrey} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    marginHorizontal: 8,
    marginVertical: 4,
  },
  descriptionContainer: {
    flex: 1,
    padding: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    marginTop: 4,
  },
  detail: {
    fontSize: 12,
    marginTop: 8,
    marginRight: 8,
  },
  description: {
    fontSize: 12,
  },
  startingBid: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  photoContainer: {
    height: 96,
    width: 96,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ligthGrey2,
  },
});

export default memo(ListItem);
