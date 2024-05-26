import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Topbar from '../../components/Topbar';
import CustomText from '../../components/CustomText';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {appColors} from '../../utils/appColors';
import CustomModal from '../../components/CustomModal';
import personIcon from '../../assets/images/person.png';
import {Image} from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import callIcon from '../../assets/images/call.png';
import {useNavigation} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OtpInputs from '../../components/OtpSection';
import OtpTimer from '../../components/OtpTimmer';

const ProfileScreen = () => {
  const [nameChangeModal, setNameChangeModal] = useState(false);
  const [contactChangeModal, setContactChangeModal] = useState(false);
  const [firstName, setFirstName] = useState('priya');
  const [lastName, setLastName] = useState('sharma');
  const [contact, setContact] = useState('+919876543210');
  const [otpSection, setOtpSection] = useState(false);
  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [optStatus, setOptStatus] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [isResend, setIsResend] = useState(false);
  const navigation = useNavigation();

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
    <View className="flex-1 bg-white ">
      <Topbar title="PROFILE" />
      <View className="px-3 pt-4 ">
        <CustomText font="medium" className="text-2xl text-primary">
          My Details
        </CustomText>
        <View className="my-4 ">
          <View className="flex-row items-center justify-between ">
            <View className="flex-row items-center ">
              <View className="p-4 bg-buttonBg rounded-xl">
                <Icon name="user-large" size={25} color={appColors?.primary} />
              </View>
              <View className="ml-2 ">
                <CustomText font="medium" className="text-lg text-appBalck">
                  Name
                </CustomText>
                <CustomText className="capitalize text-appGray">
                  {firstName} {lastName}
                </CustomText>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setNameChangeModal(!nameChangeModal);
              }}>
              <CustomText font="medium" className="text-lg text-primary">
                Change
              </CustomText>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center justify-between mt-4 ">
            <View className="flex-row items-center ">
              <View className="p-4 bg-buttonBg rounded-xl">
                <Icon2 name="call" size={25} color={appColors?.primary} />
              </View>
              <View className="ml-2 ">
                <CustomText font="medium" className="text-lg text-appBalck">
                  Contact Number
                </CustomText>
                <CustomText className=" text-appGray">{contact}</CustomText>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setContactChangeModal(!contactChangeModal);
              }}>
              <CustomText font="medium" className="text-lg text-primary">
                Change
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
        <CustomModal
          visible={nameChangeModal}
          setVisible={setNameChangeModal}
          onClose={setNameChangeModal}>
          <View className="items-center pt-10 ">
            <CustomText font="medium" className="text-[28px]  text-primary">
              Personal Details
            </CustomText>
            <View className="absolute right-6 top-12">
              <TouchableOpacity
                onPress={() => setNameChangeModal(!nameChangeModal)}>
                <Ionicons
                  name="close-outline"
                  size={30}
                  color={appColors.primary}
                />
              </TouchableOpacity>
            </View>
            <CustomText>Update your name below.</CustomText>
            <View className=" w-[90%] mt-10 ">
              <InputField
                onChangeText={t => setFirstName(t)}
                value={firstName}
                placeholder="Enter your fisrt name"
                Icon={<Image source={personIcon} className="w-6 h-6 " />}
                className="w-full "
              />
              <InputField
                onChangeText={t => setLastName(t)}
                value={lastName}
                placeholder="Enter your last name"
                className="w-full my-3 "
                Icon={<Image source={personIcon} className="w-6 h-6 " />}
              />
              <View className="w-full pt-12 ">
                <CustomButton
                  isDisable={false}
                  onPress={() => {}}
                  title="UPDATE"
                />
              </View>
            </View>
          </View>
        </CustomModal>
        <CustomModal
          visible={contactChangeModal}
          setVisible={setContactChangeModal}
          onClose={setContactChangeModal}>
          <View className="items-center pt-10 ">
            <View className="absolute right-6 top-12">
              <TouchableOpacity
                onPress={() => setContactChangeModal(!nameChangeModal)}>
                <Ionicons
                  name="close-outline"
                  size={30}
                  color={appColors.primary}
                />
              </TouchableOpacity>
            </View>
            {otpSection ? (
              <View className="items-center w-full ">
                <View className="flex flex-row items-center w-full ml-8 ">
                  <TouchableOpacity
                    onPress={() => setOtpSection(!otpSection)}
                    activeOpacity={0.6}>
                    <MaterialIcon
                      name="keyboard-arrow-left"
                      color={appColors.primary}
                      size={40}
                    />
                  </TouchableOpacity>
                  <CustomText
                    font="medium"
                    className="text-[28px]  text-primary ml-16  ">
                    Verify OTP
                  </CustomText>
                </View>
                <CustomText>
                  Enter the 4-digit code sent to ‘{contact}’.
                </CustomText>
                <View className="items-center mt-6 ">
                  <OtpInputs
                    setOtpStatus={setOptStatus}
                    setPin1={setPin1}
                    setPin2={setPin2}
                    setPin3={setPin3}
                    setPin4={handleOtp}
                  />
                  <View className="flex flex-row my-10 justify-evenly w-[40%] ">
                    <OtpTimer setIsResend={setIsResend} initialSeconds={30} />
                    <TouchableOpacity disabled={!isResend}>
                      <CustomText
                        className={`text-lg underline ${
                          isResend && 'text-primary'
                        } `}>
                        Resend OTP
                      </CustomText>
                    </TouchableOpacity>
                  </View>
                </View>
                <View className="w-[90%] pt-12 ">
                  <CustomButton
                    isDisable={isDisable}
                    onPress={() => {}}
                    title="CONERM"
                    className="items-center justify-center "
                  />
                </View>
              </View>
            ) : (
              <>
                <CustomText font="medium" className="text-[28px]  text-primary">
                  Contact Number
                </CustomText>
                <CustomText>Please provide new contact number.</CustomText>
                <View className=" w-[90%] mt-10 ">
                  <InputField
                    onChangeText={t => setContact(t)}
                    value={contact}
                    keyboardType="number-pad"
                    maxLength={13}
                    placeholder="Enter phone number"
                    Icon={<Image source={callIcon} className="w-6 h-6 " />}
                    className="w-full mb-20 "
                  />

                  <View className="w-full pt-12 ">
                    <CustomButton
                      isDisable={contact?.length < 8}
                      onPress={() => {
                        setOtpSection(!otpSection);
                      }}
                      title="GET OTP"
                    />
                  </View>
                </View>
              </>
            )}
          </View>
        </CustomModal>
      </View>
    </View>
  );
};

export default ProfileScreen;
