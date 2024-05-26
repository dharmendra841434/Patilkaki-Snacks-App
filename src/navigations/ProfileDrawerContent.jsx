import {View, TouchableOpacity, FlatList, Image} from 'react-native';
import React from 'react';
import CustomText from '../components/CustomText';
import Icon from 'react-native-vector-icons/AntDesign';
import {appColors} from '../utils/appColors';
import {useNavigation} from '@react-navigation/native';
import user from '../assets/images/user.png';
import bag from '../assets/images/bag.png';
import logout from '../assets/images/logout.png';
import {useDispatch, useSelector} from 'react-redux';
import {setDrawerOpen} from '../reduxManagment/splice/appSlice';

const ProfileDrawerContent = () => {
  const profileDrawer = useSelector(state => state?.app?.profileDrawer);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View className="flex-1">
      <View className="flex-row items-center justify-between py-6 pl-8 pr-6 rounded-tl-[3rem] bg-primary ">
        <CustomText font="medium" className="text-xl text-white ">
          My Account
        </CustomText>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => dispatch(setDrawerOpen(!profileDrawer))}>
          <Icon name="close" size={25} color={appColors?.appWhite} />
        </TouchableOpacity>
      </View>
      <View className="h-[91%] relative bg-buttonBg rounded-bl-[3rem] ">
        <View className="flex-row items-center px-20 py-4 my-2 border-b border-b-gray-400 ">
          <TouchableOpacity
            onPress={() => {
              dispatch(setDrawerOpen(!profileDrawer));
              navigation?.navigate('profile');
            }}
            activeOpacity={0.6}
            style={{flexDirection: 'row'}}>
            <Image source={user} className="w-6 h-6 " />
            <CustomText font="medium" className="ml-5 text-lg text-appBalck">
              Profile
            </CustomText>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center px-20 py-4 my-2 border-b border-b-gray-400 ">
          <TouchableOpacity
            onPress={() => {
              dispatch(setDrawerOpen(!profileDrawer));
              navigation?.navigate('myorders');
            }}
            activeOpacity={0.6}
            style={{flexDirection: 'row'}}>
            <Image source={bag} className="w-[22px] h-[29px] " />
            <CustomText font="medium" className="ml-5 text-lg text-appBalck">
              My Orders
            </CustomText>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center px-20 py-4 my-2 border-b border-b-gray-400 ">
          <TouchableOpacity activeOpacity={0.6} style={{flexDirection: 'row'}}>
            <Image source={logout} className="w-6 h-6 " />
            <CustomText font="medium" className="ml-5 text-lg text-appBalck">
              Logout
            </CustomText>
          </TouchableOpacity>
        </View>
        <View className="absolute bottom-0 left-0 right-0 items-center justify-center py-6 border-t border-t-gray-400">
          <CustomText>App Version</CustomText>
        </View>
      </View>
    </View>
  );
};

export default ProfileDrawerContent;
