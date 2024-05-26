import {
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableWithoutFeedbackBase,
} from 'react-native';
import React, {ReactNode} from 'react';
import Logo from '../assets/images/logo.png';
import CustomText from './CustomText';

type Props = {
  children: ReactNode;
  containerClassName: String;
  innerContainer: Boolean; // ReactNode type allows any JSX content as children
};

const OnBoardingWrapper: React.FC<Props> = ({
  children,
  innerContainer,
  containerClassName,
}) => {
  return (
    <TouchableWithoutFeedback>
      <View className="flex-1 pt-16 bg-primary">
        <View className="items-center ">
          <Image source={Logo} className="w-32 h-32 " />
          <CustomText
            font="medium"
            className="mt-5 text-4xl text-center text-white ">
            PatilKaki’s
          </CustomText>
          <CustomText
            font="medium"
            className="text-4xl text-center text-white ">
            Unnati Programme
          </CustomText>
        </View>
        <View
          className={` absolute bottom-0 left-0  right-0 py-8 rounded-tl-[3.75rem] rounded-tr-[3.75rem] bg-secondry ${containerClassName} `}>
          <View className="items-center ">
            <View className="w-24 h-1 bg-gray-400 rounded-3xl " />
          </View>
          <View className={` ${innerContainer ? 'px-3' : 'px-4'} `}>
            {children}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OnBoardingWrapper;
