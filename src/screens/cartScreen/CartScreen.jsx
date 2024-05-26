import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Topbar from '../../components/Topbar';
import verify from '../../assets/images/verify.png';
import CustomText from '../../components/CustomText';
import {coupons, paymentButton, productList} from '../../utils/data';
import greenIcon from '../../assets/images/ico.png';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import {appColors} from '../../utils/appColors';
import PriceTag from '../../components/PriceTag';
import ItemCounter from '../../components/ItemCounter';
import {useNavigation} from '@react-navigation/native';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/EvilIcons';
import {useDispatch, useSelector} from 'react-redux';
import {calculateTotalPrice, decreasQty, increasQty} from '../../utils/helper';
import {setCartItems} from '../../reduxManagment/splice/appSlice';
import CustomButton from '../../components/CustomButton';
import CustomModal from '../../components/CustomModal';
import card from '../../assets/images/card.png';
import cash from '../../assets/images/cash.png';
import rupee from '../../assets/images/rp.png';

const CartScreen = () => {
  const cartItems = useSelector(state => state?.app?.cartItems);
  const dispatch = useDispatch();
  const [selectedCoupon, setSelectedCoupon] = useState(
    coupons?.filter((item, index) => item?.isApplied === true && item)[0],
  );
  const [paymentOption, setPaymentOption] = useState(false);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('POR');

  const handleIncreaseQuantity = item => {
    if (item?.quantity < 8) {
      const incItem = increasQty(cartItems, item?.id, item?.quantity);
      // const updatedItem = calculateTotalPrice(incItem);
      // console.log(calculateTotalPrice(incItem));
      dispatch(setCartItems(incItem));
    }
  };

  const handleDecreaseQuantity = item => {
    if (item?.quantity > 1) {
      const decItem = decreasQty(cartItems, item?.id, item?.quantity);
      dispatch(setCartItems(decItem));
    }
  };

  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white ">
      <Topbar title="MY CART" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {cartItems?.length === 0 ? (
          <View className="px-3 mt-2 ">
            <View className="border-b-2 border-b-primary/40">
              <CustomText font="medium" className="text-2xl text-primary">
                Items in Cart
              </CustomText>
              <View className="items-center justify-center py-3 my-4 rounded-lg bg-cardBg">
                <Icon5 name="cart" size={50} />
                <CustomText
                  font="bold"
                  className="my-2 text-2xl text-gray-600 ">
                  Your cart looks lonely!
                </CustomText>
                <CustomText className="my-1 text-center ">
                  Let's fill it up with delicious treats and jumpstart your
                  taste journey.
                </CustomText>
              </View>
            </View>
            <View className="pb-5 my-6 border-b-2 border-b-primary/40">
              <CustomText font="medium" className="mb-5 text-2xl text-primary">
                Explore your next favorite snack!
              </CustomText>
              <FlatList
                data={productList}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                  <View className="mx-1 rounded-lg bg-cardBg ">
                    <Image
                      className="w-40 h-36 "
                      source={require('../../assets/images/p1.png')}
                    />
                    <View className="w-40 px-1 py-3 ">
                      <CustomText font="medium" className="text-gray-900 ">
                        Besan Ladoo (Pure Ghee) 100g
                      </CustomText>
                      <CustomText className="text-sm ">Customisable</CustomText>

                      <View className="flex-row items-center justify-between pt-3 ">
                        <PriceTag
                          price={item?.discounted_price}
                          className="text-gray-800 "
                        />
                        <TouchableOpacity
                          activeOpacity={0.6}
                          style={{
                            backgroundColor: '#FBD9CC',
                            paddingHorizontal: 5,
                            borderWidth: 1.5,
                            borderColor: appColors?.primary,
                            borderRadius: 6,
                            paddingVertical: 1,
                          }}>
                          <CustomText font="medium" className=" text-primary">
                            Add +{' '}
                          </CustomText>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>

            <View className="pb-5 my-6 border-b-2 border-b-primary/40">
              <CustomText font="medium" className="mb-5 text-2xl text-primary">
                Reorder the snacks you loved!
              </CustomText>
              <FlatList
                data={productList}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                  <View className="mx-1 rounded-lg bg-cardBg ">
                    <Image
                      className="w-40 h-36 "
                      source={require('../../assets/images/p1.png')}
                    />
                    <View className="w-40 px-1 py-3 ">
                      <CustomText font="medium" className="text-gray-900 ">
                        Besan Ladoo (Pure Ghee) 100g
                      </CustomText>
                      <CustomText className="text-sm ">Customisable</CustomText>

                      <View className="flex-row items-center justify-between pt-3 ">
                        <PriceTag
                          price={item?.discounted_price}
                          className="text-gray-800 "
                        />
                        <TouchableOpacity
                          activeOpacity={0.6}
                          style={{
                            backgroundColor: '#FBD9CC',
                            paddingHorizontal: 5,
                            borderWidth: 1.5,
                            borderColor: appColors?.primary,
                            borderRadius: 6,
                            paddingVertical: 1,
                          }}>
                          <CustomText font="medium" className=" text-primary">
                            Add +{' '}
                          </CustomText>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        ) : (
          <View className="px-3 py-3 ">
            <View className="flex flex-row items-center p-2 border-2 border-green-600 rounded-2xl bg-green-200/70">
              <Image source={verify} className="w-10 h-10 " />
              <View className="flex-row items-center pl-2 ">
                <CustomText font="bold" className="text-gray-800">
                  Yay!
                </CustomText>
                <CustomText className="ml-1 text-gray-800">
                  You saved a total of
                </CustomText>
                <CustomText font="bold" className="ml-1 text-gray-800">
                  ₹423{' '}
                </CustomText>
                <CustomText className="ml-1 text-gray-800">
                  on this order!
                </CustomText>
              </View>
            </View>
            <View className={` my-7 border-b-2 border-b-primary/40 `}>
              <CustomText font="medium" className="text-xl text-primary">
                Items in Cart
              </CustomText>
              <FlatList
                data={cartItems}
                scrollEnabled={false}
                renderItem={({item, index}) => (
                  <View
                    className={` flex-row   py-4 ${
                      index !== cartItems?.length - 1 &&
                      'border-b-2 border-b-gray-400/50'
                    } `}>
                    <View className=" w-[75%]">
                      <View className="flex-row items-center ">
                        <Image source={greenIcon} className="w-6 h-6 " />
                        <CustomText
                          font="semibold"
                          className="ml-2 text-lg text-gray-800 ">
                          {item?.title}
                        </CustomText>
                      </View>
                      <CustomText className="ml-7 ">Customisable</CustomText>
                      <PriceTag
                        price={item?.discounted_price}
                        className="text-gray-800 ml-7"
                      />
                    </View>
                    <View className=" w-[25%] flex-col items-center">
                      <ItemCounter
                        handleDecrease={() => handleDecreaseQuantity(item)}
                        handleIncrease={() => handleIncreaseQuantity(item)}
                        quantity={item?.quantity}
                      />
                      <View className="flex-row items-center my-2 ">
                        <CustomText font="medium" className="text-gray-800 ">
                          Total :{' '}
                        </CustomText>
                        <PriceTag
                          price={item?.discounted_price * item?.quantity}
                          className="text-gray-800 "
                        />
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
            <View className="pb-5 border-b-2 border-b-primary/40">
              <CustomText font="medium" className="mb-5 text-xl text-primary">
                Explore your next favorite snack!
              </CustomText>
              <FlatList
                data={productList}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                  <View className="mx-1 rounded-lg bg-cardBg ">
                    <Image
                      className="w-40 h-36 "
                      source={require('../../assets/images/p1.png')}
                    />
                    <View className="w-40 px-1 py-3 ">
                      <CustomText font="medium" className="text-gray-900 ">
                        Besan Ladoo (Pure Ghee) 100g
                      </CustomText>
                      <CustomText className="text-sm ">Customisable</CustomText>

                      <View className="flex-row items-center justify-between pt-3 ">
                        <PriceTag
                          price={item?.discounted_price}
                          className="text-gray-800 "
                        />
                        <TouchableOpacity
                          activeOpacity={0.6}
                          style={{
                            backgroundColor: '#FBD9CC',
                            paddingHorizontal: 5,
                            borderWidth: 1.5,
                            borderColor: appColors?.primary,
                            borderRadius: 6,
                            paddingVertical: 1,
                          }}>
                          <CustomText font="medium" className=" text-primary">
                            Add +{' '}
                          </CustomText>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
            <View className="py-5 border-b-2 border-b-primary/40">
              <CustomText font="medium" className="mb-5 text-xl text-primary">
                Coupons and Offers
              </CustomText>
              <View className="flex-row items-center justify-between px-3 py-4 bg-cardBg rounded-xl">
                <View className="flex-row ">
                  <Image
                    source={{uri: selectedCoupon?.icon}}
                    className="w-14 h-14 "
                  />
                  <View className="mx-2 ">
                    <CustomText
                      font="medium"
                      className="text-lg text-appBalck ">
                      ‘${selectedCoupon?.title}’ applied
                    </CustomText>
                    <View className="flex-row items-center ">
                      <PriceTag
                        price={selectedCoupon?.value}
                        className="text-sm text-green-600 "
                      />
                      <CustomText className="ml-1 text-sm text-green-600 ">
                        coupon savings
                      </CustomText>
                    </View>
                  </View>
                </View>
                <TouchableOpacity activeOpacity={0.6}>
                  <CustomText className=" text-primary">Remove</CustomText>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation?.navigate('coupons')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <CustomText className="text-lg ">
                  Apply other coupons
                </CustomText>
                <Icon3
                  name="keyboard-arrow-right"
                  size={25}
                  color={appColors?.appGray}
                />
              </TouchableOpacity>
            </View>
            <View className="py-5 border-b-2 border-b-primary/40">
              <CustomText font="medium" className="mb-5 text-xl text-primary">
                Contact and Delivery Details
              </CustomText>
              <View>
                <View className="flex-row items-center justify-between ">
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
                  <TouchableOpacity>
                    <CustomText>
                      <Icon
                        name="keyboard-arrow-down"
                        size={30}
                        color={appColors?.primary}
                      />
                    </CustomText>
                  </TouchableOpacity>
                </View>
                <View className="flex-row items-center justify-between mt-4 ">
                  <View className="flex-row ">
                    <View className="p-3 shadow-2xl bg-buttonBg rounded-xl">
                      <Icon4
                        name="calendar"
                        size={40}
                        color={appColors.primary}
                      />
                    </View>
                    <View className="ml-2 ">
                      <CustomText className="text-lg text-gray-800">
                        Delivery Date
                      </CustomText>
                      <CustomText> Friday, 13th March, 2024.</CustomText>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <CustomText>
                      <Icon
                        name="keyboard-arrow-down"
                        size={30}
                        color={appColors?.primary}
                      />
                    </CustomText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View className="py-5 ">
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
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setPaymentOption(!paymentOption)}
              style={{
                backgroundColor: appColors?.primary,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: 10,
              }}>
              <PriceTag price={312.46} className="text-xl text-white " />
              <CustomText font="medium" className="text-xl text-white ">
                PROCEED TO CHECKOUT
              </CustomText>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
      <CustomModal
        setVisible={setPaymentOption}
        visible={paymentOption}
        onClose={setPaymentOption}
        radius={50}>
        <View className="items-center ">
          <CustomText font="medium" className="text-[28px] my-10 text-primary">
            Choose Payment Method
          </CustomText>
          <View className=" w-[95%] pb-16">
            {paymentButton?.map((item, index) => (
              <TouchableOpacity
                onPress={() => setSelectedPaymentOption(item?.type)}
                activeOpacity={0.6}
                key={item?.title}>
                <View
                  className={` flex-row items-center w-full p-3 my-2 overflow-hidden  rounded-2xl ${
                    selectedPaymentOption === item?.type
                      ? 'border border-primary bg-cardBg'
                      : 'bg-white border border-white'
                  } `}>
                  <View className="p-2 rounded-full bg-primary">
                    <Image
                      source={index === 0 ? card : index == 1 ? cash : rupee}
                      className="w-10 h-10 "
                    />
                  </View>
                  <View className="ml-2 ">
                    <CustomText font="bold" className="text-xl text-appBalck ">
                      {item?.title}
                    </CustomText>
                    <CustomText className="mt-1 text-sm ">
                      {item?.description}
                    </CustomText>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </CustomModal>
      {cartItems?.length === 0 && (
        <View className="px-4 py-2 bg-white ">
          <CustomButton
            title="BROWSE ITEMS"
            onPress={() => navigation?.navigate('home')}
          />
        </View>
      )}
    </View>
  );
};

export default CartScreen;
