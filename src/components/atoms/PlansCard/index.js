import React from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import {COLORS} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import StyledText from '../styledText';
import CustomRadioButton from '../CustomRadioButton';
import Divider from '../divider';
import {SharedStyles} from '../../../shared';
import {generateRandomAmount} from '../../../helper';
import {CheckIcon, RecommendedIcon} from '../../../asstes/SVGs';

const {PRIMARY, BORDER_GREY, WHITE, TEXT_GREY, BORDER_RED} = COLORS;

const POINTS = [
  'unlimited movies and tv shows',
  'download and watch anytime',
  'supports5 devices at the same time',
];

const PlansCard = ({
  onPress,
  containerStyles,
  time,
  valid,
  active = false,
  recommended = false,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.main, containerStyles]}>
      <LinearGradient
        end={{x: 0, y: 1}}
        start={{x: 0, y: 0.1}}
        style={styles.container}
        colors={[active ? BORDER_RED : WHITE, PRIMARY]}>
        <View style={[styles.innerContainer]}>
          {recommended && (
            <View
              style={{
                position: 'absolute',
                left: 10,
              }}>
              <RecommendedIcon />
            </View>
          )}
          <View
            style={[
              styles.rowCenter,
              {
                marginTop: recommended ? 12 : 0,
              },
            ]}>
            <View style={styles.center}>
              <CustomRadioButton
                active={active}
                onPress={onPress}
                containerStyles={styles.radio}
              />
            </View>
            <View style={styles.textCon}>
              <View
                style={[
                  SharedStyles.row,
                  {
                    justifyContent: 'space-between',
                  },
                ]}>
                <StyledText textStyle={styles.text1}>{time}</StyledText>

                <StyledText
                  textStyle={[
                    styles.text1,
                    {
                      paddingRight: 5,
                    },
                  ]}>
                  {`₹${generateRandomAmount()}`}
                </StyledText>
              </View>
              <StyledText textStyle={styles.text2}>
                {`validity: ${valid} months`}
              </StyledText>
            </View>
          </View>
          {active && (
            <View>
              <Divider />
              {POINTS.map((p, idx) => {
                return (
                  <View key={`point-${idx}`} style={styles.pointCon}>
                    <CheckIcon />
                    <StyledText textStyle={styles.pointText}>{p}</StyledText>
                  </View>
                );
              })}
            </View>
          )}
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default PlansCard;

const styles = StyleSheet.create({
  main: {
    marginBottom: 20,
  },
  container: {
    padding: 1,
    position: 'relative',
    paddingHorizontal: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: BORDER_GREY,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: PRIMARY,
    position: 'relative',
  },
  radio: {
    marginTop: 20,
  },
  textCon: {
    flex: 1,
    marginLeft: 20,
  },
  text1: {
    color: WHITE,
  },
  text2: {
    paddingTop: 5,
    color: TEXT_GREY,
  },
  pointCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointText: {
    fontSize: 16,
    color: TEXT_GREY,
    paddingLeft: 5,
    paddingBottom: 10,
  },
});
