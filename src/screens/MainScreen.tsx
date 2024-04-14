import React from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';

import List from '../components/list/List';
import useFilterVehicles from '../hooks/useVehicles';
import {colors} from '../constants';

const MainScreen = () => {
  const vehicles = useFilterVehicles();
  return (
    <SafeAreaView style={styles.container}>
      <List vehicles={vehicles} />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
