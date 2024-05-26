import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const CheckBox = ({isCheck, onPress}) => {
  return (
    <View
      className={`items-center justify-center w-8 h-8 rounded-full  ${
        isCheck ? 'bg-buttonBg' : 'bg-[#2B2B2B1A]'
      } `}>
      <TouchableOpacity onPress={onPress}>
        <View
          className={` w-4 h-4 rounded-full ${
            isCheck ? 'bg-primary' : ' bg-secondry'
          } `}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CheckBox;
