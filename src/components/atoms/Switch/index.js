import React, {useState} from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {COLORS} from '../../../constants';

const {BORDER_RED} = COLORS;

const Switch = ({active, onChange}) => {
  return (
    <Pressable
      onPress={onChange}
      style={[
        styles.switch,
        {
          borderColor: active ? '#229642' : BORDER_RED,
        },
      ]}>
      <View
        style={[
          styles.indicater,
          {
            backgroundColor: active ? '#229642' : BORDER_RED,
            left: active ? null : 2,
            right: active ? 2 : null,
          },
        ]}
      />
    </Pressable>
  );
};

export default Switch;

const styles = StyleSheet.create({
  switch: {
    height: 20,
    width: 40,
    borderWidth: 1,
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: '#0f1b13',
  },
  indicater: {
    width: 15,
    height: 12,
    position: 'absolute',
  },
});
