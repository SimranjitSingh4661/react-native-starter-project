import React from 'react';
import {StyleSheet, Pressable, View, Image} from 'react-native';
import {COLORS} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';

const {PRIMARY, BORDER_GREY, WHITE} = COLORS;

const ImageBox = ({onPress, containerStyles, img}) => {
  return (
    <Pressable onPress={onPress} style={[styles.main, containerStyles]}>
      <LinearGradient
        end={{x: 0, y: 1}}
        start={{x: 0, y: 0.1}}
        style={styles.container}
        colors={[WHITE, PRIMARY]}>
        <View style={[styles.innerContainer]}>
          <Image
            source={{
              uri: img || '',
            }}
            style={styles.img}
          />
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default ImageBox;

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
  img: {
    height: 58,
    width: 58,
  },
});
