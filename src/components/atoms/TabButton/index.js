import React from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import {COLORS} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import StyledText from '../styledText';

const {PRIMARY, BORDER_GREY, WHITE, BORDER_RED} = COLORS;

const TabButton = ({onPress, containerStyles, active = false, text}) => {
  return (
    <Pressable onPress={onPress} style={[styles.main, containerStyles]}>
      <LinearGradient
        style={styles.container}
        colors={active ? [BORDER_RED, BORDER_RED] : [WHITE, PRIMARY]}>
        <View style={[styles.innerContainer, {height: active ? 35 : 32}]}>
          <StyledText color={'#d3d3d3'}>{text || ''}</StyledText>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  main: {},
  container: {
    height: 36,
    borderRadius: 20,
    position: 'relative',
    paddingHorizontal: 1,
    alignItems: 'center',
    backgroundColor: BORDER_GREY,
  },
  innerContainer: {
    top: 1,
    height: 32,
    paddingTop: 5,
    paddingHorizontal: 12,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    backgroundColor: PRIMARY,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
});
