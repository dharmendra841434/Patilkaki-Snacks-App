import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomText from './CustomText';
import PriceTag from './PriceTag';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CouponCard = ({data, handleApply}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View className="my-2 border border-primary/60 rounded-xl">
      <View className="flex-row items-center justify-between px-3 py-4 border-b border-b-gray-300 ">
        <View className="flex-row ">
          <Image source={{uri: data?.icon}} className="w-14 h-14 " />
          <View className="mx-2 ">
            <CustomText font="medium" className="text-lg text-appBalck ">
              ‘${data?.title}’ applied
            </CustomText>
            <View className="flex-row items-center ">
              <PriceTag
                size={15}
                price={data?.value}
                color="#219653"
                textClassName=" text-[12px] text-green-600"
              />
              <CustomText className="ml-1 text-green-600 ">
                coupon savings
              </CustomText>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={handleApply} activeOpacity={0.6}>
          <CustomText
            className={` ${
              data?.isApplied ? 'text-green-600' : 'text-primary'
            } `}>
            {data?.isApplied ? 'Applied' : 'Apply'}
          </CustomText>
        </TouchableOpacity>
      </View>
      <View className="px-3 py-2">
        <CustomText className="text-gray-400 ">
          Use code ILOVEKAKI and get FLAT ₹149 off on orders above ₹299
        </CustomText>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setIsOpen(!isOpen)}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomText>View Details</CustomText>
          <Icon
            name="keyboard-arrow-down"
            size={25}
            style={{
              transform: [
                {
                  rotate: isOpen ? '180deg' : '0deg',
                },
              ],
            }}
          />
        </TouchableOpacity>
        {isOpen && (
          <View>
            <CustomText>kajshyjaghg</CustomText>
          </View>
        )}
      </View>
    </View>
  );
};

export default CouponCard;
