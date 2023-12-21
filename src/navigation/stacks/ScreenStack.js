import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NAVIGATION} from '../../constants';
import {
  CategoriesScreen,
  DetailScreen,
  ExclusiveOfferScreen,
  SubscriptionScreen,
} from '../../screens';
import config from '../config';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={config}>
      <Stack.Screen
        component={ExclusiveOfferScreen}
        name={NAVIGATION.SCREENS.EXCLUSIVE_OFFER_SCREEN}
      />
      <Stack.Screen
        component={CategoriesScreen}
        name={NAVIGATION.SCREENS.CATEGORIES_SCREEN}
      />
      <Stack.Screen
        component={DetailScreen}
        name={NAVIGATION.SCREENS.DETAIL_SCREEN}
      />
      <Stack.Screen
        component={SubscriptionScreen}
        name={NAVIGATION.SCREENS.SUBSCRIPTION_SCREEN}
      />
    </Stack.Navigator>
  );
};
