import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Topbar from '../../components/Topbar';
import Icon from 'react-native-vector-icons/Ionicons';
import {appColors} from '../../utils/appColors';
import CustomText from '../../components/CustomText';
import {appFonts} from '../../utils/appFonts';
import {coupons} from '../../utils/data';
import PriceTag from '../../components/PriceTag';
import CouponCard from '../../components/CouponCard';

const CouponsScreen = () => {
  const [couponData, setCouponData] = useState(coupons);

  const toggleCouponApplied = index => {
    setCouponData(prevCoupons => {
      const updatedCoupons = prevCoupons.map((coupon, i) => ({
        ...coupon,
        isApplied: i === index,
      }));
      return updatedCoupons;
    });
  };
  return (
    <View className="flex-1 bg-white ">
      <Topbar title="APPLY COUPON" />
      <ScrollView>
        <View className="px-2 py-4 ">
          <View className="flex-row items-center w-full border rounded-xl border-primary ">
            <TextInput
              className=" w-[85%] pl-3"
              placeholder="Enter Coupon Code"
              cursorColor={appColors?.primary}
              style={{fontFamily: appFonts?.Poppins}}
            />
            <TouchableOpacity>
              <CustomText className="text-gray-400 ">Apply</CustomText>
            </TouchableOpacity>
          </View>
          <View className="my-4 ">
            <CustomText font="medium" className="text-xl text-primary">
              More Offers
            </CustomText>
            <FlatList
              data={couponData}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <CouponCard
                  handleApply={() => {
                    toggleCouponApplied(index);
                  }}
                  data={item}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CouponsScreen;
