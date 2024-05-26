import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../../utils/appColors';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import personIcon from '../../assets/images/person.png';
import callIcon from '../../assets/images/call.png';
import OnBoardingWrapper from '../../components/OnBoardingWrapper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomText from '../../components/CustomText';
import InputField from '../../components/InputField';
import CustomHeading from '../../components/CustomHeading';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const PersonalDetails = () => {
  const navigation = useNavigation();
  const [customerFirstName, setCustomerFirstName] = useState('');
  const [customerLastName, setCustomerLastName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  return (
    <OnBoardingWrapper>
      <SafeAreaView className="items-center h-full ">
        <View className="items-center w-[90%] my-6 ">
          <CustomHeading isBack={true} Title=" Personal Details" />
          <CustomText font="medium" className="mt-2 text-secoundryText">
            Enter your name and phone number below.
          </CustomText>
        </View>
        <View className=" w-[94%] ">
          <InputField
            onChangeText={t => setCustomerFirstName(t)}
            value={customerFirstName}
            placeholder="Enter your fisrt name"
            Icon={<Image source={personIcon} className="w-4 h-4 " />}
            className="w-full "
          />
          <InputField
            onChangeText={t => setCustomerLastName(t)}
            value={customerLastName}
            placeholder="Enter your last name"
            className="w-full my-3 "
            Icon={<Image source={personIcon} className="w-4 h-4 " />}
          />
          <InputField
            onChangeText={t => {
              setCustomerPhone(t);
              if (customerFirstName && customerLastName && t?.length > 8) {
                setIsDisable(false);
              } else {
                setIsDisable(true);
              }
            }}
            keyboardType="number-pad"
            maxLength={10}
            value={customerPhone}
            placeholder="Enter phone number"
            className="w-full "
            Icon={<Image source={callIcon} className="w-4 h-4 " />}
          />
        </View>
        <View className="w-full px-4 pt-12 ">
          <CustomButton
            isDisable={isDisable}
            onPress={() =>
              navigation.navigate('otp', {
                customer_data: {
                  firstName: customerFirstName,
                  lastName: customerLastName,
                  phone: customerPhone,
                },
              })
            }
            title="GET OTP"
          />
        </View>
      </SafeAreaView>
    </OnBoardingWrapper>
  );
};

export default PersonalDetails;
