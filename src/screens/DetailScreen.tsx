import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Routes from '../routes/routes';
import {RootStackParamList} from '../routes/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dayjs from 'dayjs';

const DetailScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, Routes.DETAIL>>();
  const vehicle = route.params.vehicle;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.photoContainer}>
          <Icon name="camera-off-outline" size={96} color="#5A5A5A" />
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>{vehicle.model}</Text>
        </View>
        <View style={styles.separator} />
        <Text style={styles.details}>Make: {vehicle.make}</Text>
        <View style={styles.separator} />
        <Text style={styles.details}>Year: {vehicle.year}</Text>
        <View style={styles.separator} />
        <Text style={styles.details}>Mileage: {vehicle.mileage}</Text>
        <View style={styles.separator} />
        <Text style={styles.details}>Fuel: {vehicle.fuel}</Text>
        <View style={styles.separator} />
        <Text style={styles.details}>Engine Size: {vehicle.engineSize}</Text>
        <View style={styles.separator} />
        <Text style={styles.details}>Starting Bid: ${vehicle.startingBid}</Text>
        <View style={styles.separator} />
        <Text style={styles.details}>
          Auction Date:{' '}
          {dayjs(vehicle.auctionDateTime).format('MM/DD/YYYY HH:MM')}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  photoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 16 / 9,
    backgroundColor: '#f0f0f0',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
  },
  separator: {
    height: 1,
    width: '100%',
    marginVertical: 4,
    backgroundColor: '#e0e0e0',
  },
  details: {
    fontSize: 16,
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
