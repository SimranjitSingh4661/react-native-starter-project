import React from 'react';
import {StyleSheet, Pressable, View, Image} from 'react-native';
import {COLORS} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {StyledText} from '../../atoms';

const {PRIMARY, WHITE} = COLORS;

const CircleButton = ({
  onPress,
  icon = null,
  active = false,
  imgIcon,
  large = false,
  containerStyles = {},
  text = '',
}) => {
  if (!!text) {
    return (
      <LinearGradient
        style={[
          styles.container,
          {
            width: large ? 51 : 41,
            height: large ? 51 : 41,
          },
          containerStyles,
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
          <StyledText color="white"> {`+${text}`} </StyledText>
        </View>
      </LinearGradient>
    );
  }

  return (
    <Pressable onPress={onPress} style={containerStyles}>
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
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    borderRadius: 50,
  },
  innerContainer: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY,
  },
});
