import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {appColors} from '../utils/appColors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {appFonts} from '../utils/appFonts';

const CustomButton = ({onPress, style, title, isDisable}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style, {opacity: isDisable ? 0.4 : 1}]}
      onPress={onPress}
      disabled={isDisable}
      activeOpacity={0.6}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: appColors.primary,
    alignItems: 'center',
    paddingVertical: '3.5%',
    paddingHorizontal: '6%',
    borderRadius: 10,
    columnGap: 10,
    width: '100%',
  },
  title: {
    color: appColors.appWhite,
    fontSize: 16,
    fontFamily: appFonts.PoppinsMedium,
  },
});

export default CustomButton;
