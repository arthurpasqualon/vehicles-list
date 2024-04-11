import React from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';

import Header from '../components/header/Header';
import List from '../components/list/List';
import ModalFilter from '../components/modal-filter/ModalFilter';
import {useAppSelector} from '../hooks/useReduxHooks';

const MainScreen = () => {
  const vehicles = useAppSelector(state => state.vehiclesSlice.vehicles);
  const [filterRangeOpen, setFilterRangeOpen] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Header openFilterModal={() => setFilterRangeOpen(true)} />
      <ModalFilter
        onClose={() => setFilterRangeOpen(false)}
        open={filterRangeOpen}
      />
      <List vehicles={vehicles} />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#fff',
  },
});