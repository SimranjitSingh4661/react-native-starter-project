import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  ScreenContainer,
  StyledText,
  IconButton,
  TabButton,
  Input,
} from '../../components/atoms';
import {COLORS, SCREEN_PADDING, NAVIGATION} from '../../constants';
import {SearchIcon} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CategoriesCard} from '../../components/molecules';
import {CATEGORIES} from '../../utils';

const {WHITE, TEXT_GREY, TEXT_GREY_LIGHT} = COLORS;

const ExclusiveOfferScreen = () => {
  const [data, setData] = useState(CATEGORIES);
  const [value, setValue] = useState('');

  const navigation = useNavigation();

  const onTextChange = value => {
    setValue(value);
    if (value == '') {
      setData(CATEGORIES);
    }
    setData(prev =>
      prev.filter(category =>
        category.type.toLowerCase().startsWith(value.toLowerCase()),
      ),
    );
  };

  const onItemPress = type => {
    navigation.navigate(NAVIGATION.SCREENS.CATEGORIES_SCREEN, {
      type,
    });
  };

  return (
    <ScreenContainer paddingH>
      <View style={styles.header}>
        <IconButton onPress={navigation.goBack} />
        <TabButton text={'my subscriptions'} />
      </View>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid>
        <StyledText textStyle={styles.text1}>{'BUNDLE PRODUCTS'}</StyledText>
        <StyledText textStyle={styles.text2}>{'exclusive bundles'}</StyledText>
        <StyledText textStyle={styles.text3}>
          {'We have carefully curated a few subscription packages for you.'}
        </StyledText>

        <View
          style={{
            borderWidth: 1,
            borderColor: 'white',
            height: 200,
            borderRadius: 20,
            marginTop: 20,
          }}
        />

        <StyledText textStyle={styles.text1}>{'EXPLORE BY'}</StyledText>
        <StyledText textStyle={styles.text2}>{'categories'}</StyledText>
        <StyledText textStyle={styles.text3}>
          {'Choose the category for which you want to purchase a subscription.'}
        </StyledText>
        <Input
          value={value}
          onChangeText={onTextChange}
          leftIcon={<SearchIcon color="white" />}
          containerStyle={styles.inputComponent}
          placeholder={'search by subscription, --categories'}
        />
        <View style={styles.footerContainer}>
          {data?.map((item, index) => {
            return (
              <CategoriesCard
                key={`card_${index}`}
                item={item}
                onPress={() => onItemPress(item.type)}
              />
            );
          })}
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default ExclusiveOfferScreen;

const styles = StyleSheet.create({
  header: {
    paddingTop: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text1: {
    fontSize: 14,
    marginTop: 45,
    lineHeight: 20,
    color: TEXT_GREY,
  },
  text2: {
    fontSize: 26,
    color: WHITE,
    lineHeight: 36,
    marginBottom: 10,
  },
  text3: {
    fontSize: 16,
    lineHeight: 23,
    color: TEXT_GREY_LIGHT,
  },
  inputComponent: {
    marginTop: 20,
  },
  footerContainer: {
    marginTop: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
