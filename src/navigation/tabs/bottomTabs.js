import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';
import WelcomeScreen from '../../screens/welcomeScreen';
import config from '../config';

const BottomTabs = createBottomTabNavigator();

export default () => {
  return (
    <BottomTabs.Navigator
      screenOptions={config}
      tabBar={props => {
        return <CustomTabBar {...props} />;
      }}>
      <BottomTabs.Screen name="Tab" component={WelcomeScreen} />
    </BottomTabs.Navigator>
  );
};
