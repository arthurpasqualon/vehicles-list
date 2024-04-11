import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import Button from '../button/Button';
type HeaderProps = {
  openFilterModal: () => void;
};

const Header: React.FC<HeaderProps> = ({openFilterModal}) => {
  return (
    <View style={styles.header}>
      <View style={styles.buttonsContainer}>
        <Button iconRight="filter-outline" onPress={openFilterModal} />
      </View>
      <View style={styles.columnTitleContainer}>
        <Text style={styles.nameTitle}>Vehicles</Text>
      </View>
    </View>
  );
};

export default Header;
