import React, {useState, useEffect, Fragment} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  ScreenContainer,
  StyledText,
  IconButton,
  TabButton,
  ImageBox,
  Input,
  Divider,
} from '../../components/atoms';
import {COLORS, SCREEN_PADDING, NAVIGATION} from '../../constants';
import {SearchIcon} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';
import {CATEGORIES, SUBSCRIPTIONS} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {setPlatforms} from '../../redux/actions/actions';
import {CATEGORIES_TYPES} from '../../constants/type';
import {generateRandomAmount} from '../../helper';
import {getState} from '../../redux';
import cloneDeep from 'lodash/cloneDeep';

const {WHITE, BORDER_RED} = COLORS;

const CategoriesScreen = ({route}) => {
  const cetType = route.params?.type;

  const [value, setValue] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState(cetType || 'ott');
  const [platformData, setPlatformData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getPlat = new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = getState().auth.platform;
      resolve(res);
    }, 100);
  });

  const setData = async () => {
    const res = await getPlat;
    setPlatformData(res);
    setFilterData(res);
  };

  useEffect(() => {
    try {
      dispatch(setPlatforms(SUBSCRIPTIONS));
      setData();
    } catch (err) {
      console.log('CategoriesScreen', err);
    }
  }, []);

  const onTextChange = async value => {
    setValue(value);
    if (value == '') {
      setData();
    }
    setPlatformData(prev =>
      prev.filter(item =>
        item.title.toLowerCase().startsWith(value.toLowerCase()),
      ),
    );
  };

  const onViewItemPress = item => {
    navigation.navigate(NAVIGATION.SCREENS.DETAIL_SCREEN, {
      item: item,
    });
  };

  const onTabChange = tab => {
    setSelectedPlatform(tab);
    const clone = cloneDeep(platformData);
    setFilterData(clone.filter(item => item.type === tab));
  };

  return (
    <ScreenContainer paddingH>
      <View style={styles.header}>
        <IconButton onPress={navigation.goBack} />
      </View>
      <View>
        <ScrollView
          horizontal
          style={styles.headerScrollView}
          showsHorizontalScrollIndicator={false}>
          {CATEGORIES_TYPES.map((item, index) => {
            return (
              <TabButton
                text={item}
                key={`tab_${index}`}
                active={item == selectedPlatform}
                containerStyles={styles.tabCompStyle}
                onPress={() => onTabChange(item)}
              />
            );
          })}
        </ScrollView>
        <Input
          value={value}
          onChangeText={onTextChange}
          placeholder={'search by platform'}
          containerStyle={styles.inputComponent}
          leftIcon={<SearchIcon color="white" />}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 30,
          }}
          contentContainerStyle={{
            paddingBottom: 200,
          }}>
          {filterData?.map((item, index) => {
            return (
              <Fragment>
                <View
                  key={`list_${index}`}
                  style={{
                    flexDirection: 'row',
                  }}>
                  <ImageBox img={item.img} />
                  <View style={styles.textContainer}>
                    <StyledText textStyle={styles.text1}>
                      {item.title}
                    </StyledText>
                    <StyledText
                      textStyle={
                        styles.text2
                      }>{`paln starts from ₹${generateRandomAmount()}`}</StyledText>
                    <StyledText
                      textStyle={styles.text3}
                      onPress={() => onViewItemPress(item)}>
                      view details
                    </StyledText>
                  </View>
                </View>
                <Divider />
              </Fragment>
            );
          })}
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  header: {
    paddingTop: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerScrollView: {
    marginTop: 24,
    marginBottom: 32,
  },
  loading: {
    marginTop: 40,
  },
  tabCompStyle: {
    marginRight: 6,
  },
  inputComponent: {},
  textContainer: {
    marginLeft: 20,
  },
  text1: {
    color: WHITE,
  },
  text2: {
    color: WHITE,
  },
  text3: {
    paddingTop: 5,
    color: BORDER_RED,
    textDecorationLine: 'underline',
  },
});
