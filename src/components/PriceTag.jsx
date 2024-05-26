import {View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';

const PriceTag = ({price, className, color, textClassName, size}) => {
  return (
    <View className={`flex-row items-center  `}>
      <CustomText font="medium" className={`text-lg ${className}  `}>
        ₹{price}
      </CustomText>
    </View>
  );
};

export default PriceTag;
