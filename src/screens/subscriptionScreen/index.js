import React, {useState, useEffect, Fragment} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  ScreenContainer,
  StyledText,
  IconButton,
  ImageBox,
  Switch,
  Divider,
} from '../../components/atoms';
import {COLORS, SCREEN_PADDING, NAVIGATION, SCREEN} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const {WHITE, BORDER_RED, TEXT_GREY} = COLORS;

const SubscriptionScreen = ({route}) => {
  const [activePlan, setActivePlan] = useState([]);
  const [inActivePlan, setInActivePlan] = useState([]);
  const subscription = useSelector(state => state.auth?.subscription);

  console.log('subscription'), subscription;
  useEffect(() => {
    setActivePlan(subscription.filter(item => item.active === true));
    setInActivePlan(subscription.filter(item => item.active !== true));
  }, []);

  const navigation = useNavigation();

  const onPlanActive_InActive = plan => {
    setActivePlan(pres =>
      pres.map(item => {
        if (item.id === plan?.id) {
          return {...item, active: !item.active};
        }
        return item;
      }),
    );
  };

  return (
    <ScreenContainer paddingH>
      <View style={styles.header}>
        <IconButton onPress={navigation.goBack} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {activePlan?.length == 0 && inActivePlan?.length == 0 ? (
          <StyledText textStyle={[styles.desctext]}>
            {'No Subscriptions subscribed'.toUpperCase()}
          </StyledText>
        ) : null}
        {activePlan?.length !== 0 && (
          <Fragment>
            <StyledText textStyle={[styles.desctext]}>
              {'Active Subscription'.toUpperCase()}
            </StyledText>
            {activePlan?.map((plan, index) => {
              console.log('plan?.img', plan);
              const isLastElement = index === activePlan.length - 1;
              return (
                <Fragment>
                  <View
                    key={`active${index}`}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <ImageBox img={plan?.img} />
                    <View style={styles.textContainer}>
                      <StyledText textStyle={styles.text1}>
                        {plan?.title || ''}
                      </StyledText>
                      <StyledText
                        textStyle={
                          styles.text2
                        }>{`plan expires on ${plan?.expireOn}`}</StyledText>
                      <StyledText
                        textStyle={styles.text3}
                        // onPress={() => onViewItemPress(item)}
                      >
                        view details
                      </StyledText>
                    </View>
                    <Switch
                      active={plan?.active}
                      onChange={() => onPlanActive_InActive(plan)}
                    />
                  </View>
                  {isLastElement ? null : <Divider />}
                </Fragment>
              );
            })}
          </Fragment>
        )}
        {inActivePlan?.length !== 0 && (
          <Fragment>
            <StyledText textStyle={[styles.desctext]}>
              {'Expired Subscription'.toUpperCase()}
            </StyledText>
            {inActivePlan?.map((plan, index) => {
              const isLastElement = index === inActivePlan.length - 1;
              return (
                <Fragment>
                  <View
                    key={`inActivePlan${index}`}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <ImageBox img={plan?.img} />
                    <View style={styles.textContainer}>
                      <StyledText textStyle={styles.text1}>
                        {plan?.title || ''}
                      </StyledText>
                      <StyledText
                        textStyle={
                          styles.text2
                        }>{`plan expires on ${plan?.expireOn}`}</StyledText>
                      <StyledText
                        textStyle={styles.text3}
                        onPress={() => onViewItemPress(item)}>
                        view details
                      </StyledText>
                    </View>
                  </View>
                  {isLastElement ? null : <Divider />}
                </Fragment>
              );
            })}
          </Fragment>
        )}
      </ScrollView>
    </ScreenContainer>
  );
};

export default SubscriptionScreen;

const styles = StyleSheet.create({
  header: {
    paddingTop: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  desctext: {
    fontSize: 16,
    color: TEXT_GREY,
    marginTop: 20,
    marginBottom: 20,
  },
  textContainer: {
    marginLeft: 20,
    paddingTop: 6,
    flex: 1,
  },
  text1: {
    color: WHITE,
  },
  text2: {
    color: TEXT_GREY,
  },
  text3: {
    paddingTop: 5,
    color: BORDER_RED,
    textDecorationLine: 'underline',
  },
});
