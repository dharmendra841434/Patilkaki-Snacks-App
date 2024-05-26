import {View, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import OnBoardingWrapper from '../../components/OnBoardingWrapper';
import CustomText from '../../components/CustomText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {appColors} from '../../utils/appColors';
import {useNavigation} from '@react-navigation/native';
import InputField from '../../components/InputField';
import buildIcon from '../../assets/images/building.png';
import CustomButton from '../../components/CustomButton';
import {offices} from '../../utils/data';
import CustomHeading from '../../components/CustomHeading';

const SearchOffice = () => {
  const navigation = useNavigation();
  const [office, setOffice] = useState(offices[0].name);
  const [isDisable, setIsDisable] = useState(false);

  const handleChange = value => {
    // if (value?.length > 6 || office?.length > 6) {
    //   setIsDisable(false);
    // } else {
    //   setIsDisable(true);
    // }
    setOffice(value);
  };
  return (
    <OnBoardingWrapper containerClassName="top-[45%]">
      <View className="items-center h-full ">
        <View className="items-center w-full my-6 ">
          <CustomHeading isBack={true} Title="Delivery Office" />
          <CustomText className="mt-2 text-secoundryText">
            Choose your delivery location from the list.
          </CustomText>
        </View>
        <InputField
          onChangeText={handleChange}
          value={office}
          placeholder="Enter office name"
          className="w-full "
          Icon={<Image source={buildIcon} className="w-6 h-6 " />}
        />

        <View className=" w-full bg-white rounded-md h-[9rem] mt-1 py-1">
          <FlatList
            data={offices}
            scrollEnabled
            scrollIndicatorInsets={{right: 1}}
            renderItem={({item, index}) => (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setOffice(item?.name)}>
                <CustomText className="px-3 py-1 text-black ">
                  {item?.name}
                </CustomText>
              </TouchableOpacity>
            )}
          />
        </View>
        <View className="absolute bottom-0 w-full px-4 ">
          <CustomButton
            isDisable={isDisable}
            onPress={() => navigation.navigate('personal_details')}
            title="CONFIRM"
          />
        </View>
      </View>
    </OnBoardingWrapper>
  );
};

export default SearchOffice;
