import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const COLORS = {
  Black: '#000000',
  BlackRGB10: 'rgba(0,0,0,0.1)',
  Orange: '#FF5524',
  OrangeRGBA0: 'rgba(255,85,36,0)',
  Grey: '#333333',
  DarkGrey: '#0b0b0b',
  Yellow: '#E1CD17',
  White: '#FFFFFF',
};

export const FONTS = {
  primary: 'Montserrat-Medium',
  primary2: 'Montserrat-Bold',
};
export const SIZES = {
  width,
  height,
};
