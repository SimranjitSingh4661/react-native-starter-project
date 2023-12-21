import React from 'react';
import {ArrowLeft} from 'lucide-react-native';
import {StyleSheet, Pressable, View} from 'react-native';
import {COLORS} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';

const {PRIMARY, BORDER_GREY} = COLORS;

const IconButton = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient style={styles.container} colors={[BORDER_GREY, PRIMARY]}>
        <View style={styles.innerContainer} />
        <ArrowLeft color="white" size={22} />
      </LinearGradient>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    paddingTop: 5,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: BORDER_GREY,
  },
  innerContainer: {
    top: 1,
    width: 31,
    height: 31,
    position: 'absolute',
    backgroundColor: PRIMARY,
  },
});
