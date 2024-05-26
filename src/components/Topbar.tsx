import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {appColors} from '../utils/appColors';
import CustomText from './CustomText';

type BarProps = {
  title: String;
};

const Topbar: React.FC<BarProps> = ({title}) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center w-full py-2 bg-primary">
      <TouchableOpacity
        onPress={() => navigation?.goBack()}
        activeOpacity={0.6}>
        <Icon name="keyboard-arrow-left" size={35} color={appColors.appWhite} />
      </TouchableOpacity>
      <CustomText font="medium" className="ml-2 text-white ">
        {title}
      </CustomText>
    </View>
  );
};

export default Topbar;
