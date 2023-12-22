import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import {COLORS, SCREEN} from '../../../constants';
import {StyledText, CircleButton} from '../../atoms';
import LinearGradient from 'react-native-linear-gradient';

const {BORDER_GREY, PRIMARY, WHITE, TEXT_GREY} = COLORS;
const {WIDTH} = SCREEN;

const CategoriesCard = ({onPress, containerStyles, item}) => {
  const Icon =
    item.categories?.length >= 3
      ? item.categories.slice(0, 3)
      : item.categories;
  const iconLen = Icon.length;
  return (
    <Pressable onPress={onPress} style={[containerStyles]}>
      <LinearGradient
        end={{x: 0, y: 1}}
        start={{x: 0, y: 0.1}}
        style={styles.container}
        colors={['rgba(255, 255, 255, 0.2)', PRIMARY]}>
        <View style={[styles.innerContainer]}>
          {Icon.map((img, index) => {
            return (
              <CircleButton
                imgIcon={img}
                key={`icon_${index}`}
                text={iconLen == 3 && index == 2 ? item.total : false}
                containerStyles={[
                  styles.icon,
                  {
                    left: iconLen <= 2 ? 30 : 18 + index * 15,
                  },
                ]}
              />
            );
          })}
          <StyledText textStyle={styles.text1}>{item.type}</StyledText>
          <StyledText
            textStyle={styles.text2}>{`+${item.platform} platform`}</StyledText>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default CategoriesCard;

const styles = StyleSheet.create({
  container: {
    padding: 1, 
    marginBottom: 30,
    paddingHorizontal: 1,
    width: (WIDTH - 64) / 3.2,
    backgroundColor: BORDER_GREY,
  },
  innerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    top: 15,
    position: 'absolute',
  },
  text1: {
    marginTop: 60,
    fontSize: 14,
    color: WHITE,
  },
  text2: {
    paddingTop: 2,
    fontSize: 12,
    color: TEXT_GREY,
  },
});
