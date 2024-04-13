import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import Routes from '../routes/routes';
import {RootStackParamList} from '../routes/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, Routes.DETAIL>>();
  const vehicle = route.params.vehicle;
  return (
    <SafeAreaView style={styles.container}>
      <Icon name="camera-off-outline" size={96} color="#5A5A5A" />
      <Text>Detail Screen</Text>
      <Text>{vehicle.make}</Text>
      <Text>{vehicle.model}</Text>
      <Text>{vehicle.year}</Text>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#fff',
  },
});
