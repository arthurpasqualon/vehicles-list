import React from 'react';
import {View} from 'react-native';

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
    </View>
  );
};

export default Header;
