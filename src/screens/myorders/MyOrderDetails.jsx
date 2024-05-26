import {
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Topbar from '../../components/Topbar';
import CustomText from '../../components/CustomText';
import {productList} from '../../utils/data';
import greenIcon from '../../assets/images/ico.png';
import Icon from 'react-native-vector-icons/Zocial';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/EvilIcons';
import {appColors} from '../../utils/appColors';
import Woman from '../../assets/images/wmn.png';
import PriceTag from '../../components/PriceTag';
import caller from '../../assets/images/caller.png';

const MyOrderDetails = () => {
  return (
    <View className="flex-1 bg-white ">
      <Topbar title="ORDER DETAILS" />
      <ScrollView>
        <View className="">
          <View className="px-3 py-5 ">
            <View className="flex-row items-center justify-between ">
              <CustomText font="medium" className="text-xl text-primary">
                ORDER NO. 6758O
              </CustomText>
              <View className="px-2 py-1 border border-yellow-600 rounded-md h-fit bg-yellow-200/50 ">
                <CustomText font="medium" className="text-yellow-600 ">
                  Order Placed
                </CustomText>
              </View>
            </View>
            <View className="px-3 mt-5 rounded-lg bg-cardBg">
              <View className="flex-row justify-between py-4 ">
                <View>
                  <CustomText className=" text-appGray">
                    Delivered date: 13th March, 2024
                  </CustomText>
                  <View className="flex-row items-center ">
                    <CustomText className="text-gray-900 ">
                      Total Amount : ₹207
                    </CustomText>
                    <CustomText className="ml-2 line-through ">₹317</CustomText>
                  </View>
                  <View className="px-2 mt-2 py-1 border border-green-600 rounded-md w-[45%] h-fit bg-green-100/30 ">
                    <CustomText font="medium" className="text-green-600 ">
                      ₹90 saved!
                    </CustomText>
                  </View>
                </View>
              </View>
              <View className="py-3 border-t-2 border-t-gray-400/60">
                <CustomText font="medium" className="text-lg text-gray-400 ">
                  Items Ordered
                </CustomText>
                <FlatList
                  data={productList?.slice(0, 3)}
                  scrollEnabled={false}
                  renderItem={({item, index}) => (
                    <View
                      key={index}
                      className="flex-row justify-between my-2 ">
                      <View>
                        <View className="flex-row items-center ">
                          <Image source={greenIcon} className="w-7 h-7 " />
                          <CustomText className="ml-1 text-lg text-gray-900 ">
                            {item?.title}
                          </CustomText>
                        </View>
                        <CustomText className="ml-8 text-appGray ">
                          ₹99
                        </CustomText>
                      </View>
                      <View className="items-center ">
                        <CustomText className="text-lg text-gray-900 ">
                          Qty : 1{' '}
                        </CustomText>
                        <CustomText className=" text-appGray">
                          Total : ₹99{' '}
                        </CustomText>
                      </View>
                    </View>
                  )}
                />
                <CustomText className=" text-primary">
                  + {productList?.length - 3} more
                </CustomText>
              </View>
            </View>
            <View className="pt-5 ">
              <CustomText font="medium" className="mb-5 text-xl text-primary">
                Contact and Delivery Details
              </CustomText>
              <View>
                <View className="flex-row ">
                  <View className="p-4 shadow-2xl bg-buttonBg rounded-xl">
                    <Icon2
                      name="location-sharp"
                      size={30}
                      color={appColors.primary}
                    />
                  </View>
                  <View className="ml-2 ">
                    <CustomText className="text-lg text-gray-800">
                      Delivery to
                    </CustomText>
                    <CustomText> BMC Office, Santacruz</CustomText>
                  </View>
                </View>
                <View className="flex-row mt-4 ">
                  <View className="px-4 py-3 shadow-2xl bg-buttonBg rounded-xl">
                    <Icon name="call" size={30} color={appColors.primary} />
                  </View>
                  <View className="ml-2 ">
                    <CustomText className="text-lg text-gray-800">
                      Contact Phone
                    </CustomText>
                    <CustomText>+91 9876543210</CustomText>
                  </View>
                </View>
                <View className="flex-row mt-4 ">
                  <View className="p-3 shadow-2xl bg-buttonBg rounded-xl">
                    <Icon4
                      name="calendar"
                      size={40}
                      color={appColors.primary}
                    />
                  </View>
                  <View className="ml-2 ">
                    <CustomText className="text-lg text-gray-800">
                      Next Delivery Date
                    </CustomText>
                    <CustomText> Friday, 13th March, 2024.</CustomText>
                  </View>
                </View>
              </View>
            </View>
            <View className="pt-5 ">
              <CustomText font="medium" className="mb-5 text-xl text-primary">
                Empowerment on the Move
              </CustomText>
              <View className="flex-row s ">
                <Image source={Woman} className="w-20 h-20 rounded-full " />
                <View className=" w-[80%] ml-2">
                  <CustomText className="text-justify ">
                    Bringing your order is Shantala Mishra, a passionate
                    entrepreneur and mother of two. Thank you for joining us in
                    celebrating her journey towards empowerment.
                  </CustomText>
                </View>
              </View>
            </View>
            <View className="pt-5 ">
              <CustomText font="medium" className="text-xl text-primary">
                Billing Details
              </CustomText>
              <View className="py-4 border-b border-b-gray-300">
                <View className="flex-row items-center justify-between my-1 ">
                  <CustomText className="">Item Total</CustomText>
                  <PriceTag price={297} />
                </View>
                <View className="flex-row items-center justify-between my-1 ">
                  <View>
                    <CustomText className="">Delivery Fee</CustomText>
                    <CustomText className="text-sm text-gray-400 ">
                      Enjoy free delivery!
                    </CustomText>
                  </View>
                  <CustomText font="medium" className="text-lg text-green-600 ">
                    FREE
                  </CustomText>
                </View>
                <View className="flex-row items-center justify-between my-1 ">
                  <CustomText className="">Discount</CustomText>
                  <View className="flex-row items-center ">
                    <CustomText className="text-green-600 ">-</CustomText>
                    <PriceTag price={50} className="text-green-600 " />
                  </View>
                </View>
                <View className="flex-row items-center justify-between my-1 ">
                  <CustomText className="">GST</CustomText>
                  <PriceTag price={21.56} />
                </View>
              </View>
              <View className="flex-row items-center justify-between py-2 ">
                <CustomText font="medium" className="text-gray-900 ">
                  Total
                </CustomText>
                <PriceTag price={312.46} className="text-gray-800 " />
              </View>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            //style={{position: 'absolute', left: 0, right: 0, bottom: 0}}
          >
            <View className="flex-row items-center justify-center py-4 bg-cardBg">
              <Image source={caller} className="w-8 h-8 " />
              <CustomText font="medium" className="ml-4 text-lg text-primary">
                For assistance WhatsApp on : 9876543210
              </CustomText>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyOrderDetails;
