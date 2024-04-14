import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../button/Button';
import {colors} from '../../constants';

interface FilterItemProps {
  title: string;
  onPress: (option: string) => void;
  isSelected: boolean;
}

const FilterItem: React.FC<FilterItemProps> = ({
  title,
  onPress,
  isSelected,
}) => {
  const textColor = isSelected ? colors.white : colors.white70;
  return (
    <View style={styles.container}>
      <Button
        title={title}
        onPress={() => onPress(title)}
        iconRight={isSelected ? 'delete' : 'plus'}
        textColor={textColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.white70,
    paddingVertical: 12,
    marginHorizontal: 12,
  },
});

export default FilterItem;
