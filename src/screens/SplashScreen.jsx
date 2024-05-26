import {View, StatusBar, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import {appColors} from '../utils/appColors';
import {useNavigation} from '@react-navigation/native';
import Logo from '../assets/images/logo.png';
import CustomText from '../components/CustomText';

const SplashScreen = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate('welcome');
    //navigation.replace('main');
  }, 5000);
  return (
    <View className="flex-1 ">
      <StatusBar backgroundColor={appColors.primary} barStyle="light-content" />
      <View className="items-center pt-20 bg-primary h-[94%] px-10">
        <Image source={Logo} className="w-32 h-32 " />
        <CustomText
          font="semibold"
          className="mt-5 text-4xl text-center text-white ">
          PatilKaki’s
        </CustomText>
        <CustomText
          font="semibold"
          className="text-4xl text-center text-white ">
          Unnati Programme
        </CustomText>
        <CustomText className="mt-16 text-2xl text-white ">
          {' '}
          Wait for a second ..
        </CustomText>
        <ActivityIndicator className="mt-16" size={50} color="white" />
        <CustomText className="mt-12 text-xl text-center text-white ">
          "Empowering Women, One Delivery at a Time - A Proud Initiative by
          PatilKaki"
        </CustomText>
      </View>
      <View className=" bg-secondry h-[7%] items-center justify-center">
        <CustomText className=" text-primary">
          {' '}
          © 2024 PatilKaki Ecom Ventures Pvt. Ltd.{' '}
        </CustomText>
      </View>
    </View>
  );
};

export default SplashScreen;
