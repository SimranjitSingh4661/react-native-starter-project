import React, {useState, useEffect, Fragment} from 'react';
import {StyleSheet, View, ScrollView, ImageBackground} from 'react-native';
import {
  ScreenContainer,
  StyledText,
  IconButton,
  ImageBox,
  Button,
  PlansCard,
} from '../../components/atoms';
import {COLORS, SCREEN_PADDING, NAVIGATION, SCREEN} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {subscrivePlan} from '../../redux/actions/actions';
import {SharedStyles} from '../../shared';
import {PlayButton} from '../../asstes/SVGs';
import moment from 'moment';

const {WHITE, BORDER_RED, TEXT_GREY} = COLORS;
const {HEIGHT, WIDTH} = SCREEN;

const DetailScreen = ({route}) => {
  const item = route.params?.item;

  const [planSelected, setPlanSelected] = useState({});
  const [active, setActive] = useState(null);

  const [expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPlanBuy = () => {
    dispatch(subscrivePlan(planSelected));
    navigation.navigate(NAVIGATION.SCREENS.SUBSCRIPTION_SCREEN);
  };

  const onPlanPress = (list, index) => {
    const body = {
      id: moment(),
      date: moment(),
      expireOn: moment().add(list.valid, 'months').format('DD MMMM YYYY'),
      active: true,
      img: item.img,
      title: item.title,
    };
    setPlanSelected({...list, ...body});
    setActive(index);
  };

  return (
    <ScreenContainer>
      <View style={SharedStyles.fullFlex}>
        <ScrollView
          style={SharedStyles.fullFlex}
          showsHorizontalScrollIndicator={false}>
          <ImageBackground
            source={require('../../asstes/Images/detailScreen.png')}
            style={styles.headerIma}>
            <IconButton onPress={navigation.goBack} />
            <View
              style={{
                top: 130,
                left: WIDTH / 3,
                position: 'absolute',
              }}>
              <PlayButton />
            </View>
          </ImageBackground>
          <View style={styles.titleRow}>
            <ImageBox img={item.img} />
            <View style={styles.textContainer}>
              <StyledText textStyle={styles.text1}>
                {'The married woman streaming on'}
              </StyledText>
              <StyledText textStyle={styles.text2}>
                {item.title || ''}
              </StyledText>
            </View>
          </View>
          <View style={styles.descContainer}>
            <StyledText textStyle={styles.desctext}>
              {`At vero eos et accusamus et iusto odio dignis sim os ducimus qui blanditiis praese ntium vol uptat um deleniti atque corrupti quos dolores etquas molestias excepturi sint occaecati cu piditate non provident, similique ${
                expanded
                  ? '\n\nAt vero eos et accusamus et iusto odio dignis sim os ducimus qui blanditiis praese ntium vol uptat um deleniti atque corrupti quos dolores etquas molestias excepturi sint occaecati cu piditate non provident, similique'
                  : ''
              }`}
            </StyledText>
            <StyledText
              onPress={() => setExpanded(!expanded)}
              textStyle={styles.viewMore}>
              {'view more'}
            </StyledText>
            <StyledText
              textStyle={[
                styles.desctext,
                {
                  marginTop: 20,
                },
              ]}>
              {'select plan based on your preference'.toUpperCase()}
            </StyledText>
          </View>

          <View style={styles.cardContainer}>
            {item?.plans?.map((item, index) => {
              return (
                <PlansCard
                  key={`point-card-${index}`}
                  active={active == index}
                  recommended={item.recommended}
                  time={item.time}
                  valid={item.valid}
                  onPress={() => onPlanPress(item, index)}
                />
              );
            })}
          </View>
        </ScrollView>
        {active !== null && (
          <View style={styles.btnContainer}>
            <Button
              containerStyles={styles.btn}
              onPress={onPlanBuy}
              text={'buy once'}
            />
            <Button
              containerStyles={styles.btn}
              onPress={onPlanBuy}
              redBg
              text={'subscribe'}
            />
          </View>
        )}
      </View>
    </ScreenContainer>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  headerIma: {
    width: WIDTH,
    paddingTop: 26,
    height: HEIGHT / 3,
    flexDirection: 'row',
    paddingHorizontal: SCREEN_PADDING,
    position: 'relative',
  },
  titleRow: {
    flexDirection: 'row',
    paddingHorizontal: SCREEN_PADDING,
  },
  textContainer: {
    marginLeft: 20,
  },
  text1: {
    paddingTop: 5,
    color: WHITE,
  },
  text2: {
    paddingTop: 10,
    fontSize: 25,
    color: WHITE,
  },

  descContainer: {
    marginTop: 10,
    paddingHorizontal: SCREEN_PADDING,
  },
  desctext: {
    fontSize: 16,
    color: TEXT_GREY,
  },
  viewMore: {
    paddingTop: 5,
    color: BORDER_RED,
    textDecorationLine: 'underline',
  },
  cardContainer: {
    paddingHorizontal: SCREEN_PADDING,
    marginTop: 20,
  },
  btnContainer: {
    paddingHorizontal: SCREEN_PADDING,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  btn: {
    width: WIDTH / 2.4,
  },
});
