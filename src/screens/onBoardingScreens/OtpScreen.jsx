import {View, Dimensions, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../../utils/appColors';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import OtpInput from '../../components/OtpSection';
import OnBoardingWrapper from '../../components/OnBoardingWrapper';
import CustomText from '../../components/CustomText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OtpTimer from '../../components/OtpTimmer';
import CustomHeading from '../../components/CustomHeading';

// const Height = Dimensions.get('window').height;
// const Width = Dimensions.get('window').width;

const OtpScreen = props => {
  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [optStatus, setOptStatus] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [isResend, setIsResend] = useState(false);
  const navigation = useNavigation();
  const customer_data = props?.route?.params?.customer_data;

  const handleOtp = val => {
    setPin4(val);
    if (pin1 && pin2 && pin3 && val) {
      setIsDisable(false);
      //console.log(pin1, pin2, pin3, pin4, 'this is pin');
    } else {
      setIsDisable(true);
    }
  };

  return (
    <OnBoardingWrapper containerClassName="top-[50%]">
      <SafeAreaView>
        <View style={{alignItems: 'center', width: '100%'}}>
          <View className="items-center w-[90%] my-6 ">
            <CustomHeading isBack={true} Title="Verify OTP" />
            <CustomText className="mt-2 text-secoundryText">
              Enter the 4-digit code sent to “{customer_data?.phone}”.
            </CustomText>
          </View>

          <OtpInput
            setOtpStatus={setOptStatus}
            setPin1={setPin1}
            setPin2={setPin2}
            setPin3={setPin3}
            setPin4={handleOtp}
          />
          <View className="flex flex-row my-10 justify-evenly w-[45%] ">
            <OtpTimer setIsResend={setIsResend} initialSeconds={30} />
            <TouchableOpacity disabled={!isResend}>
              <CustomText
                className={`text-[16px] underline ${
                  isResend && 'text-primary'
                } `}>
                Resend OTP
              </CustomText>
            </TouchableOpacity>
          </View>
          <View className="w-full px-4 pt-12 ">
            <CustomButton
              isDisable={isDisable}
              onPress={() => navigation.navigate('main')}
              title="CONFIRM"
            />
          </View>
        </View>
      </SafeAreaView>
    </OnBoardingWrapper>
  );
};

export default OtpScreen;
