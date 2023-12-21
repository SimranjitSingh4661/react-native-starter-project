import React from 'react';
import {StyleSheet, Pressable, View, Image} from 'react-native';
import {COLORS} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';

const {PRIMARY, WHITE} = COLORS;

const CircleButton = ({
  onPress,
  icon = null,
  active = false,
  imgIcon = '',
  large = false,
}) => {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        style={[
          styles.container,
          {
            width: large ? 51 : 41,
            height: large ? 51 : 41,
          },
        ]}
        colors={[active ? WHITE : 'rgba(255, 255, 255, 0.2)', PRIMARY]}>
        <View
          style={[
            styles.innerContainer,
            {
              width: large ? 48 : 38,
              height: large ? 48 : 38,
            },
          ]}>
          {!!imgIcon ? (
            <Image
              style={[
                styles.tinyLogo,
                {
                  width: large ? 48 : 38,
                  height: large ? 48 : 38,
                },
              ]}
              source={{
                uri: imgIcon || '',
              }}
            />
          ) : (
            icon
          )}
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default CircleButton;

const styles = StyleSheet.create({
  container: {
    width: 41,
    height: 41,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 38,
    height: 38,
    borderRadius: 50,
  },
  innerContainer: {
    width: 38,
    height: 38,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY,
  },
});
