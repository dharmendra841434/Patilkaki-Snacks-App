import React from 'react';
import {Text} from 'react-native';
import {appFonts} from '../utils/appFonts';
import {appColors} from '../utils/appColors';

const CustomText = ({font, children, className, style, ...props}) => {
  let fontFamily;
  switch (font) {
    case 'bold':
      fontFamily = appFonts.PoppinsBold;
      break;
    case 'extraBold':
      fontFamily = appFonts.PoppinsExtraBold;
      break;
    case 'medium':
      fontFamily = appFonts.PoppinsMedium;
      break;
    case 'semibold':
      fontFamily = appFonts.PoppinsSemibold;
      break;
    case 'itelic':
      fontFamily = appFonts.PoppinsItelic;
      break;
    default:
      fontFamily = appFonts.Poppins;
  }
  return (
    <Text
      className={` ${className} `}
      style={[{fontFamily: fontFamily}, style]}
      {...props}
      testID={className}>
      {children}
    </Text>
  );
};

export default CustomText;
