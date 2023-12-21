import React, {useState} from 'react';
import {View, StyleSheet, ImageBackground, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TabGinie, TabHome, TabQr} from '../../asstes/SVGs';
import {COLORS} from '../../constants';
import {CircleButton} from '../../components/atoms';
import {StyledText} from '../../components/atoms';

const {WHITE, TEXT_GREY, TEXT_GREY_LIGHT} = COLORS;

const TABS = [
  {
    id: 'tab1',
    name: 'home',
    screen: 'HOME',
    icon: <TabHome />,
    large: false,
  },
  {
    id: 'tab2',
    name: 'yolo pay',
    screen: 'YOLO',
    icon: <TabQr />,
    large: true,
  },
  {
    id: 'tab3',
    name: 'ginie',
    screen: 'GINIE',
    icon: <TabGinie />,
    large: false,
  },
];

const CustomTabBar = ({state, descriptors, navigation}) => {
  const [activeTab, setActiveTab] = useState('HOME');
  const {navigate} = useNavigation();

  const onTabChange = tab => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.tabContainer}>
      <ImageBackground
        style={styles.tabBG}
        resizeMode="contain"
        source={require('../../asstes/Images/bottomTab.png')}
      />
      <View style={styles.tabInnerContainer}>
        {TABS.map((tab, index) => {
          return (
            <Pressable
              key={`${tab.id}_${index}`}
              onPress={() => onTabChange(tab.screen)}
              style={[
                styles.tabBox,
                {
                  bottom: tab.large ? 10 : 0,
                },
              ]}>
              <CircleButton
                icon={tab.icon}
                large={tab.large}
                key={`${tab.id}_${index}`}
                active={tab.screen === activeTab}
                onPress={() => onTabChange(tab.screen)}
              />
              <StyledText color={tab.screen === activeTab ? WHITE : TEXT_GREY}>
                {tab.name}
              </StyledText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    paddingBottom: 10,
    position: 'relative',
    backgroundColor: COLORS.PRIMARY,
  },
  tabBG: {
    bottom: 0,
    height: 120,
    width: '100%',
    position: 'absolute',
  },
  tabInnerContainer: {
    width: '100%',
    flexDirection: 'row',
    position: 'relative',
    paddingHorizontal: 40,
  },
  tabBox: {
    flex: 1,
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomTabBar;
