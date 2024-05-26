import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {appColors} from '../utils/appColors';
import {useNavigation} from '@react-navigation/native';
import CustomText from './CustomText';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomHeading = ({isBack, Title}) => {
  const navigation = useNavigation();
  return (
    <View className="items-center w-full ">
      {isBack && (
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          className="absolute -left-4 "
          activeOpacity={0.6}>
          <Icon
            name="keyboard-arrow-left"
            color={appColors.primary}
            size={40}
          />
        </TouchableOpacity>
      )}
      <CustomText font="medium" className=" text-[28px] text-primary">
        {Title}
      </CustomText>
    </View>
  );
};

export default CustomHeading;
