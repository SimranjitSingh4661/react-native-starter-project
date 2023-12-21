import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {StyledText} from '../../atoms';
import {COLORS, SCREEN} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {CoinIcon} from '../../../asstes/SVGs';
import {Button} from '../../atoms';

const {PRIMARY, TEXT_GREY_LIGHT} = COLORS;
const {HEIGHT, WIDTH} = SCREEN;

const HomeBannerCard = ({onPress, image = '', title = '', coinText = ''}) => {
  return (
    <View>
      <LinearGradient
        end={{x: 0, y: 1}}
        start={{x: 0, y: 0.1}}
        style={styles.container}
        colors={['rgba(255, 255, 255, 0.2)', PRIMARY]}>
        <View style={[styles.innerContainer]}>
          <Image
            style={styles.tinyLogo}
            source={image || require('../../../asstes/Images/banner1.png')}
          />
          <View style={styles.footerContainer}>
            <View style={styles.textContainer}>
              <StyledText
                color={'#d3d3d3'}
                textStyle={styles.coin_required_text}>
                {title || 'coins required'}
              </StyledText>
              <View style={styles.coin_icon_Container}>
                <CoinIcon />
                <StyledText textStyle={styles.coin_text} color={'#d3d3d3'}>
                  {coinText || '1000 coins for each ticket'}
                </StyledText>
              </View>
            </View>
            <Button
              onPress={onPress}
              containerStyles={styles.btnContainer}
              text={'claim'}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default HomeBannerCard;

const styles = StyleSheet.create({
  container: {
    padding: 1,
    width: WIDTH / 1.5,
    marginRight: 16,
  },
  innerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 14,
    backgroundColor: PRIMARY,
  },
  tinyLogo: {
    width: WIDTH / 1.7,
    height: HEIGHT / 3.5,
  },
  footerContainer: {
    flexDirection: 'row',
  },
  textContainer: {
    flex: 3,
  },
  coin_required_text: {
    fontSize: 12,
    marginTop: 18,
    lineHeight: 18,
    color: TEXT_GREY_LIGHT,
  },
  coin_icon_Container: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  coin_text: {
    fontSize: 10,
    paddingLeft: 5,
    fontWeight: '600',
  },
  btnContainer: {
    marginTop: 15,
  },
});
