import {Dimensions} from 'react-native';

export enum FONTS {
  regular = 'System',
}

const {height, width} = Dimensions.get('window');

export const COLORS = {
  PRIMARY: '#0D0D0D',
  WHITE: 'white',
  BORDER_GREY: '#535353',
  TEXT_GREY: '#555555',
  BORDER_RED: '#A90808',
  BLACK: 'black',
  TEXT_GREY_LIGHT: '#6e6e6e',

  blue: '#1C568C',
  lightBlue: '#F1F5F9',
  white: '#FFF',
  red: '#EC1C24',
  golden: '#FFC05A',
  textInputBlack: '#04131F',
  textGray: '#878997',
  brandRed: '#FB4D58',
};

export const FONT_SIZE = {
  SM: 12,
  MD: 16,
  LG: 20,
};

export const SCREEN_PADDING = 16;

export const SCREEN = {
  HEIGHT: height,
  WIDTH: width,
};
