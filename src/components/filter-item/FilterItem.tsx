import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../button/Button';

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
  const textColor = isSelected ? '#7d00ff' : '#5A5A5A';
  return (
    <View style={styles.container}>
      <Button
        title={title}
        onPress={() => onPress(title)}
        textColor={textColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 12,
    marginHorizontal: 12,
  },
  name: {
    flex: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    fontSize: 16,
    fontWeight: '500',
    color: '#5A5A5A',
  },
  code: {
    flex: 1,
    fontSize: 16,
  },
});

export default FilterItem;
