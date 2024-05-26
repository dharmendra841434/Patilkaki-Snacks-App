import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {appColors} from '../utils/appColors';
import CustomText from './CustomText';

const ItemCounter = ({quantity, handleIncrease, handleDecrease, className}) => {
  return (
    <View
      className={` flex-row items-center justify-between  px-2 py-1 border-2 rounded-lg bg-buttonBg border-primary ${className} `}>
      <TouchableOpacity onPress={handleDecrease}>
        <Icon name="remove-outline" size={23} color={appColors.primary} />
      </TouchableOpacity>
      <CustomText font="medium" className="text-xl text-gray-900 ">
        {quantity}
      </CustomText>
      <TouchableOpacity onPress={handleIncrease}>
        <Icon name="add-outline" size={23} color={appColors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default ItemCounter;
