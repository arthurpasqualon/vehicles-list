import React from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';

const FiltersPage = () => {
  return <SafeAreaView style={styles.container} />;
};

export default FiltersPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#fff',
  },
});
