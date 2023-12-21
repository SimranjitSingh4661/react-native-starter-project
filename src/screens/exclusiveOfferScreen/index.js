import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  ScreenContainer,
  StyledText,
  IconButton,
  TabButton,
} from '../../components/atoms';
import {COLORS, SCREEN_PADDING} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const ExclusiveOfferScreen = () => {
  return (
    <ScreenContainer>
      <View style={styles.header}>
        <IconButton />
        <TabButton text={'my subscriptions'}/>
      </View>
      {/* <StyledText color="white">{'my subscriptions'}</StyledText> */}
    </ScreenContainer>
  );
};

export default ExclusiveOfferScreen;

const styles = StyleSheet.create({
  header: {
    paddingTop: 26,
    flexDirection: 'row',
    paddingHorizontal: SCREEN_PADDING,
    justifyContent: 'space-between',
  },
});
