import React from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import {COLORS} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import StyledText from '../styledText';

const {PRIMARY, BORDER_GREY, WHITE} = COLORS;

const Button = ({
  text,
  onPress,
  redBg = false,
  containerStyles,
  innerContainerStyles,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.main, {...containerStyles}]}>
      <LinearGradient
        end={{x: 1, y: 0}}
        start={{x: 0, y: 0.5}}
        style={styles.container}
        colors={redBg ? ['#BB0707', '#7D1212'] : [WHITE, PRIMARY]}>
        {redBg ? (
          <View style={[styles.redBgtrue, innerContainerStyles]}>
            <StyledText color={'#d3d3d3'}>{text || ''}</StyledText>
          </View>
        ) : (
          <View style={[styles.innerContainer, innerContainerStyles]}>
            <StyledText color={'#d3d3d3'}>{text || ''}</StyledText>
          </View>
        )}
      </LinearGradient>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
  },
  container: {
    padding: 1,
    position: 'relative',
    paddingHorizontal: 1,
    backgroundColor: BORDER_GREY,
  },
  redBgtrue: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center'
  },
  innerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: PRIMARY,
    alignItems: 'center'
  },
});
