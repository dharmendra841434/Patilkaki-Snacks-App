import {TextInput, View} from 'react-native';
import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {appColors} from '../../utils/appColors';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import OnBoardingWrapper from '../../components/OnBoardingWrapper';
import CustomText from '../../components/CustomText';
import InputField from '../../components/InputField';
import Icon from 'react-native-vector-icons/Fontisto';

const SearchPinCode = () => {
  const [pincode, setPincode] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const inputRef = useRef();
  const navigation = useNavigation();
  const handleChange = inputValue => {
    const numericValue = inputValue.replace(/\D/g, '');
    if (numericValue?.length === 6) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
    setPincode(numericValue);
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <OnBoardingWrapper containerClassName="top-[45%]">
      <View className="items-center h-full ">
        <View className="items-center my-6 ">
          <CustomText font="medium" className="text-[28px] text-primary">
            Office Pin Code
          </CustomText>
          <CustomText font="medium" className="mt-2 text-secoundryText">
            Input pin code for snack availability.
          </CustomText>
        </View>
        <InputField
          onChangeText={handleChange}
          value={pincode}
          maxLength={6}
          ref={inputRef}
          Icon={
            <Icon name="search" size={16} color={appColors.secoundryText} />
          }
          keyboardType="number-pad"
          placeholder="Enter Office Pin Code"
          className=" w-[94%]"
        />
        <View className="w-full px-5 py-1 ">
          <CustomText font="itelic" className="text-sm text-secoundryText">
            Ex. 580030
          </CustomText>
        </View>

        <View className="absolute bottom-0 w-full px-4 ">
          <CustomButton
            isDisable={isDisable}
            onPress={() => navigation.navigate('search_office')}
            title="SEARCH OFFICES"
          />
        </View>
      </View>
    </OnBoardingWrapper>
  );
};

export default SearchPinCode;
