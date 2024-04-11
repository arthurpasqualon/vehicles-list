import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
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
  textColor = '#7d00ff',
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {iconLeft && <Icon name={iconLeft} size={24} color={textColor} />}
      {title && <Text style={[styles.title, {color: textColor}]}>{title}</Text>}
      {iconRight && <Icon name={iconRight} size={24} color={textColor} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    margin: 2,
    borderRadius: 12,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Button;
