import React from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import {COLORS} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import StyledText from '../styledText';

const {PRIMARY, BORDER_GREY, WHITE} = COLORS;

const Button = ({onPress, containerStyles, text}) => {
  return (
    <Pressable onPress={onPress} style={[styles.main, containerStyles]}>
      <LinearGradient
        end={{x: 0, y: 1}}
        start={{x: 0, y: 0.1}}
        style={styles.container}
        colors={[WHITE, PRIMARY]}>
        <View style={[styles.innerContainer]}>
          <StyledText color={'#d3d3d3'}>{text || 'hello'}</StyledText>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  main: {},
  container: {
    padding: 1,
    position: 'relative',
    paddingHorizontal: 1,
    backgroundColor: BORDER_GREY,
  },
  innerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: PRIMARY,
  },
});
