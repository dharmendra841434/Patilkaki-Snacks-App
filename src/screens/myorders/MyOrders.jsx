import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Topbar from '../../components/Topbar';
import CustomText from '../../components/CustomText';
import {productList} from '../../utils/data';
import greenIcon from '../../assets/images/ico.png';
import {useNavigation} from '@react-navigation/native';

const MyOrders = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white">
      <Topbar title="MY ORDERS" />
      <ScrollView>
        <View className="px-3 py-4 ">
          <CustomText font="medium" className="text-2xl text-primary">
            Previous Orders
          </CustomText>
          <View className="my-4 ">
            <FlatList
              data={[1, 2, 3]}
              scrollEnabled={false}
              renderItem={({item, index}) => (
                <View className="px-3 mb-3 rounded-lg bg-cardBg">
                  <View className="flex-row justify-between py-4 ">
                    <View>
                      <CustomText
                        font="medium"
                        className="text-lg text-gray-900 ">
                        Order No. : 6758{' '}
                      </CustomText>
                      <CustomText className=" text-appGray">
                        Delivered date: 13th March, 2024
                      </CustomText>
                      <View className="flex-row items-center ">
                        <CustomText className="text-gray-900 ">
                          Total Amount : ₹207
                        </CustomText>
                        <CustomText className="ml-2 line-through ">
                          ₹317
                        </CustomText>
                      </View>
                      <View className="px-2 mt-2 py-1 border border-green-600 rounded-md w-[45%] h-fit bg-green-100/30 ">
                        <CustomText font="medium" className="text-green-600 ">
                          ₹90 saved!
                        </CustomText>
                      </View>
                    </View>
                    <View>
                      <View className="px-2 py-1 border border-green-600 rounded-md h-fit bg-green-200/50 ">
                        <CustomText font="medium" className="text-green-600 ">
                          Delivered
                        </CustomText>
                      </View>
                    </View>
                  </View>
                  <View className="py-3 border-t-2 border-t-gray-400/60">
                    <CustomText
                      font="medium"
                      className="text-lg text-gray-400 ">
                      Items Ordered
                    </CustomText>
                    <FlatList
                      data={productList?.slice(0, 3)}
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
                    <View className="flex-row items-center justify-between my-2 ">
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('myorderdetails', {
                            orderData: 'kahsjkdhas',
                          });
                        }}
                        activeOpacity={0.6}>
                        <View className="px-2 py-1 border rounded-lg bg-buttonBg border-primary">
                          <CustomText font="medium" className=" text-primary">
                            View details
                          </CustomText>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('success')}
                        activeOpacity={0.6}>
                        <View className="px-5 py-2 rounded-md bg-primary">
                          <CustomText className="text-white ">
                            Reorder
                          </CustomText>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyOrders;
