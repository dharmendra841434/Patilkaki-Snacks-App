import {View, TextInput} from 'react-native';
import React, {useState, useRef} from 'react';
import {appColors} from '../utils/appColors';

type OtpInputsProps = {
  setPin1: (pin: string) => void;
  setPin2: (pin: string) => void;
  setPin3: (pin: string) => void;
  setPin4: (pin: string) => void;
  setOtpStatus: (status: string) => void;
};

const OtpInputs: React.FC<OtpInputsProps> = ({
  setPin1,
  setPin2,
  setPin3,
  setPin4,
  setOtpStatus,
}) => {
  const [pin1Status, setPin1Status] = useState(false);
  const [pin2Status, setPin2Status] = useState(false);
  const [pin3Status, setPin3Status] = useState(false);
  const [pin4Status, setPin4Status] = useState(false);
  const pin1Ref = useRef<TextInput>(null);
  const pin2Ref = useRef<TextInput>(null);
  const pin3Ref = useRef<TextInput>(null);
  const pin4Ref = useRef<TextInput>(null);

  return (
    <View className="flex flex-row justify-around w-[90%] ">
      <TextInput
        maxLength={1}
        ref={pin1Ref}
        autoFocus={true}
        keyboardType="number-pad"
        onFocus={() => setPin1Status(true)}
        onBlur={() => setPin1Status(false)}
        cursorColor={appColors.primary}
        className={` bg-white border text-center rounded-lg px-5 py-3  ${
          pin1Status ? 'border-primary' : 'border-primary/30'
        } `}
        onChangeText={p1 => {
          setPin1(p1);
          setOtpStatus('');
          if (p1 !== '') {
            pin2Ref?.current?.focus();
          }
        }}
      />
      <TextInput
        className={` bg-white border text-center rounded-lg px-5 py-3  ${
          pin2Status ? 'border-primary' : 'border-primary/50'
        } `}
        placeholder="___"
        maxLength={1}
        ref={pin2Ref}
        onFocus={() => setPin2Status(true)}
        onBlur={() => setPin2Status(false)}
        keyboardType="number-pad"
        onChangeText={p2 => {
          setPin2(p2);
          setOtpStatus('');
          if (p2 !== '') {
            pin3Ref?.current?.focus();
          }
        }}
        onKeyPress={function (e) {
          if (e.nativeEvent.key === 'Backspace') {
            pin1Ref?.current?.focus();
          }
        }}
      />
      <TextInput
        className={` bg-white border text-center rounded-lg px-5 py-3  ${
          pin3Status ? 'border-primary' : 'border-primary/50'
        } `}
        placeholder="___"
        maxLength={1}
        ref={pin3Ref}
        onFocus={() => setPin3Status(true)}
        onBlur={() => setPin3Status(false)}
        keyboardType="number-pad"
        onChangeText={p3 => {
          setPin3(p3);
          setOtpStatus('');
          if (p3 !== '') {
            pin4Ref?.current?.focus();
          }
        }}
        onKeyPress={function (e) {
          if (e.nativeEvent.key === 'Backspace') {
            pin2Ref?.current?.focus();
          }
        }}
      />
      <TextInput
        className={` bg-white border text-center rounded-lg px-5 py-3  ${
          pin4Status ? 'border-primary' : 'border-primary/50'
        } `}
        placeholder="___"
        maxLength={1}
        ref={pin4Ref}
        onFocus={() => setPin4Status(true)}
        onBlur={() => setPin4Status(false)}
        keyboardType="number-pad"
        onChangeText={p4 => {
          setPin4(p4);
          setOtpStatus('');
          if (p4 !== '') {
            pin4Ref?.current?.blur();
          }
        }}
        onKeyPress={function (e) {
          if (e.nativeEvent.key === 'Backspace') {
            pin3Ref?.current?.focus();
          }
        }}
      />
    </View>
  );
};

export default OtpInputs;
