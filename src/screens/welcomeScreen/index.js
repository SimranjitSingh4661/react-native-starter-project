import React, {Component, Fragment} from 'react';
import {View, Pressable, ScrollView, StyleSheet} from 'react-native';
import Config from 'react-native-config';
import {YoloLogo} from '../../asstes/SVGs';
import {useNavigation} from '@react-navigation/native';
import {
  ScreenContainer,
  StyledText,
  IconButton,
  TabButton,
  Button,
  SquareButton,
  CustomRadioButton,
  Switch,
  CircleButton,
} from '../../components/atoms';
import {HomeBannerCard} from '../../components/molecules';
import {HOME_BANNERS} from '../../utils';
import {COLORS, SCREEN, SCREEN_PADDING, NAVIGATION} from '../../constants';

const {WIDTH} = SCREEN;
const {TEXT_GREY, BORDER_RED, WHITE, TEXT_GREY_LIGHT} = COLORS;

const WelcomeScreen = () => {
  console.log({config: Config.getConstants()});
  const {navigate} = useNavigation();

  const onViewAllPress = () => {
    navigate('Screen', {
      screen: NAVIGATION.SCREENS.EXCLUSIVE_OFFER_SCREEN,
    });
  };

  return (
    <ScreenContainer>
      <YoloLogo />
      <View style={styles.row}>
        <View style={styles.container1}>
          <StyledText textStyle={styles.subscription_text} color={TEXT_GREY}>
            {'SUBSCRIPTIONS'}
          </StyledText>
          <StyledText textStyle={styles.experience_text} color={WHITE}>
            {'Experience the Thrill of Winning'}
          </StyledText>
        </View>
        <View style={styles.container2}>
          <StyledText
            color={TEXT_GREY}
            textAlign="right"
            onPress={onViewAllPress}
            textStyle={styles.viewAll_text}>
            {'view all'}
          </StyledText>
        </View>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        disableIntervalMomentum
        snapToInterval={WIDTH - 120}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        {HOME_BANNERS?.map?.((item, index) => {
          return <HomeBannerCard key={item.id} image={item.image} />;
        })}
      </ScrollView>
      <Fragment>
        {/* <View
          style={{
            backgroundColor: '#0D0D0D',
            // flex: 1,
            padding: 20,
            // display: 'flex',
            flexDirection: 'row',
          }}>
          <IconButton onPress={() => console.log('hello')} />
          
          <TabButton />
          
          <Button />
          
          <View
          style={{
            padding: 17,
          }}
          />
          
          <CustomRadioButton isActive={true} />
          
          <SquareButton />
          
          <View
          style={{
            padding: 17,
          }}
          />
          
          <Switch />
          
        </View> */}
      </Fragment>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingLeft: SCREEN_PADDING,
  },
  row: {
    marginTop: 50,
    flexDirection: 'row',
    paddingHorizontal: SCREEN_PADDING,
  },
  container1: {
    flex: 2,
  },
  subscription_text: {
    fontSize: 12,
    lineHeight: 18,
  },
  experience_text: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '600',
  },
  container2: {
    flex: 1,
  },
  viewAll_text: {
    fontSize: 14,
    color: BORDER_RED,
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;
