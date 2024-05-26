import {View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import CustomText from '../components/CustomText';
import Icon from 'react-native-vector-icons/AntDesign';
import {appColors} from '../utils/appColors';
import {useNavigation} from '@react-navigation/native';
import {category} from '../utils/data';

const DrawerMenu = props => {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <View className="flex-row items-center justify-between py-6 pl-4 pr-6 rounded-tr-[3rem] bg-primary ">
        <CustomText font="medium" className="text-xl text-white ">
          Our Categories
        </CustomText>
        <TouchableOpacity
          activeOpacity={0.6}
          //onPress={() => navigation.toggleDrawer()}
        >
          <Icon name="close" size={25} color={appColors?.appWhite} />
        </TouchableOpacity>
      </View>
      <View className="h-[91%] bg-buttonBg rounded-br-[3rem] ">
        <FlatList
          data={category}
          renderItem={({item, index}) => (
            <View className="flex-row items-center px-4 py-2 my-2 border-b border-b-gray-400 ">
              <View className="w-10 h-10 mr-3 bg-white "></View>
              <CustomText font="medium" className=" text-appBalck">
                {item}
              </CustomText>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default DrawerMenu;
