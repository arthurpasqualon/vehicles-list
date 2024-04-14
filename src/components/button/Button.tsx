import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ButtonProps {
  onPress: () => void;
  title?: string;
  iconLeft?: string;
  iconRight?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  iconLeft,
  iconRight,
  textColor = '#ffffff',
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {title && (
        <View style={styles.titleContainer}>
          {iconLeft && (
            <Icon
              name={iconLeft}
              size={24}
              color={textColor}
              style={styles.iconLeft}
            />
          )}
          <Text style={[styles.title, {color: textColor}]}>{title}</Text>
        </View>
      )}
      {iconRight && <Icon name={iconRight} size={24} color={textColor} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    margin: 2,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    flex: 1,
  },
  iconLeft: {
    marginRight: 8,
  },
});

export default Button;
