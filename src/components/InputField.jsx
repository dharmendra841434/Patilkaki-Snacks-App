import {View, TextInput} from 'react-native';
import {appFonts} from '../utils/appFonts';
import React from 'react';
import {appColors} from '../utils/appColors';

const InputField = React.forwardRef(({className, Icon, ...restProps}, ref) => {
  return (
    <View
      className={` flex flex-row items-center overflow-hidden border-primary bg-white border rounded-xl pl-4 ${className} `}>
      <View className="mx-2 ">{Icon}</View>
      <TextInput
        className="w-full h-full py-3 bg-transparent "
        {...restProps}
        ref={ref}
        cursorColor={appColors.primary}
        style={{fontFamily: appFonts.Poppins, color: 'black', paddingTop: 14}}
      />
    </View>
  );
});

export default InputField;
