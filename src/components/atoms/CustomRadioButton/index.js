import React from 'react';
import {View, Pressable, StyleSheet, Text} from 'react-native';
import {COLORS} from '../../../constants';

const {BLACK, BORDER_RED, PRIMARY} = COLORS;

const CustomRadioButton = ({
  color,
  onPress,
  label = null,
  isActive = false,
  containerStyles = {},
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.main, {...containerStyles}]}
      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <View
        style={[
          styles.container,
          {
            borderColor: isActive ? color || BORDER_RED : BORDER_RED,
            backgroundColor: isActive ? color || ['#3c0b0b'] : PRIMARY,
          },
        ]}>
        {isActive && (
          <View
            style={[styles.active, {backgroundColor: color || BORDER_RED}]}
          />
        )}
      </View>
      <Text style={styles.radioLabel}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  main: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  container: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    width: 10,
    height: 10,
    borderRadius: 20,
  },
  radioLabel: {
    fontSize: 15,
    marginLeft: 10,
    lineHeight: 20,
    color: BLACK,
  },
});

export default CustomRadioButton;
