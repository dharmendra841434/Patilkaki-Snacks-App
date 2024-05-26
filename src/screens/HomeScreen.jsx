import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome6';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {appColors} from '../utils/appColors';
import {useNavigation} from '@react-navigation/native';
import {category, offices, productList} from '../utils/data';
import Logo from '../assets/images/logo.png';
import CustomText from '../components/CustomText';
import AutoSlider from '../components/AutoSlider';
import greenIcon from '../assets/images/ico.png';
import PriceTag from '../components/PriceTag';
import {appFonts} from '../utils/appFonts';
import {setCartItems, setDrawerOpen} from '../reduxManagment/splice/appSlice';
import CustomModal from '../components/CustomModal';
import ItemCounter from '../components/ItemCounter';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../components/InputField';
import CheckBox from '../components/CheckBox';
import CustomButton from '../components/CustomButton';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import buildIcon from '../assets/images/building.png';
import LinearGradient from 'react-native-linear-gradient';
import {Animated} from 'react-native';

// const Height = Dimensions.get('window').height;
// const Width = Dimensions.get('window').width;

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(category[0]);
  const profileDrawer = useSelector(state => state?.app?.profileDrawer);
  const cartItems = useSelector(state => state?.app?.cartItems);
  const [changeAddressModal, setChangeAddressModal] = useState(false);
  const [changeDeliveryDate, setChangeDeliveryDate] = useState(false);
  const [selectedDeliveryDate, setSelectedDeliveryDate] = useState('Wednesday');
  const navigation = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [officeSection, setOfficeSection] = useState(false);
  const [officePinCode, setOfficePinCode] = useState('');
  const [opacity] = useState(new Animated.Value(0));
  const [opacity2] = useState(new Animated.Value(0));
  const [scrollValue, setScrollValue] = useState(0);

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeIn2 = () => {
    Animated.timing(opacity2, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut2 = () => {
    Animated.timing(opacity2, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    // Start the initial animation when component mounts
    fadeIn();
    fadeOut2();
    // Clean up
    return () => {
      opacity.removeAllListeners();
      opacity2.removeAllListeners();
    };
  }, [opacity, opacity2]);
  const dispatch = useDispatch();
  const handleScroll = event => {
    const scrollY = Math.round(event.nativeEvent.contentOffset.y);
    setScrollValue(scrollY);
    if (scrollY > 55) {
      fadeOut();
      fadeIn2();
    } else {
      setIsScrolled(false);
      fadeIn();
      fadeOut2();
    }
  };

  const addItemsInCart = () => {
    let carts = [...cartItems];
    if (carts?.length === 0) {
      carts?.push({
        ...selectedProduct,
        quantity: 1,
      });
    } else {
      const isAvail = carts.some(obj => obj.id === selectedProduct?.id);
      if (!isAvail) {
        carts?.push({
          ...selectedProduct,
          quantity: 1,
        });
      }
    }
    dispatch(setCartItems(carts));
    setCustomize(!customize);
    setSelectedProduct(!selectedProduct);
  };

  //console.log(cartItems);

  return (
    <View className="flex-1 bg-white ">
      <View className="flex-row justify-between w-full px-3 py-3 border-b border-white bg-primary">
        <View className="flex-row items-center ">
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            activeOpacity={0.6}>
            <Icon name="menu" size={32} color={appColors.appWhite} />
          </TouchableOpacity>
          {/* {isScrolled ? (
            <View className="flex-row items-center my-2 ml-2 ">
              <Icon
                name="location-sharp"
                size={20}
                color={appColors.appWhite}
              />

              <CustomText className="ml-2 text-secondry">
                BMC Office, Santacruz....
              </CustomText>
              <TouchableOpacity
                onPress={() => setChangeDeliveryDate(!changeDeliveryDate)}>
                <Icon3
                  name="keyboard-arrow-down"
                  size={23}
                  color={appColors.appWhite}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <LinearGradient
              colors={['#F7F394', '#C6BE05']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              className="flex flex-row items-center px-3 py-1 ml-3 "
              style={{borderRadius: 50}}>
              <Image className="w-8 h-8 " source={Logo} />
              <CustomText className="ml-2 text-gray-950 ">
                Unnati Programme
              </CustomText>
            </LinearGradient>
          )} */}
          <Animated.View
            style={{
              opacity: opacity2,
              position: 'absolute',
              left: '80%',
              top: 0,
            }}
            className="flex-row items-center my-2 ml-2 ">
            <Icon name="location-sharp" size={20} color={appColors.appWhite} />

            <CustomText className="ml-2 text-secondry">
              BMC Office, Santacruz....
            </CustomText>
            <TouchableOpacity
              onPress={() => setChangeDeliveryDate(!changeDeliveryDate)}>
              <Icon3
                name="keyboard-arrow-down"
                size={23}
                color={appColors.appWhite}
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={{
              opacity: opacity,
              position: 'absolute',
              left: '80%',
              top: 0,
            }}>
            <LinearGradient
              colors={['#F7F394', '#C6BE05']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              className="flex flex-row items-center px-3 py-1 ml-3 "
              style={{borderRadius: 50}}>
              <Image className="w-8 h-8 " source={Logo} />
              <CustomText className="ml-2 text-gray-950 ">
                Unnati Programme
              </CustomText>
            </LinearGradient>
          </Animated.View>
        </View>
        <View className="flex-row items-center justify-around gap-x-3 w-[25%] ">
          <View className="relative ">
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation?.navigate('cart')}>
              <Icon3
                name="shopping-cart"
                size={25}
                color={appColors.appWhite}
              />
            </TouchableOpacity>
            {cartItems?.length > 0 && (
              <View className="absolute px-2 text-white bg-[#FBD9CC] rounded-full -right-3 ">
                <CustomText className="text-sm text-gray-800 ">
                  {cartItems?.length}
                </CustomText>
              </View>
            )}
          </View>
          <TouchableOpacity
            onPress={() => dispatch(setDrawerOpen(!profileDrawer))}
            activeOpacity={0.6}>
            <Icon2 name="user-large" size={20} color={appColors.appWhite} />
          </TouchableOpacity>
        </View>
      </View>
      <Animated.View
        className={` ${scrollValue > 55 ? 'block' : 'hidden'} `}
        style={[styles?.searchBar, {opacity: opacity2}]}>
        <View className="flex-row items-center my-3 bg-white rounded-lg h-fit ">
          <TextInput
            className="w-[90%] py-2 px-2 "
            onFocus={() => {
              navigation?.navigate('search');
            }}
            placeholder="Search for the yummiest snacks..."
            cursorColor={appColors.primary}
            style={{fontFamily: appFonts?.Poppins}}
          />
          <Icon name="search" size={20} color="#2B2B2B40" />
        </View>
      </Animated.View>
      <ScrollView onScroll={handleScroll} showsVerticalScrollIndicator={false}>
        <View>
          {!isScrolled && (
            <View className="px-2 py-2 bg-primary">
              <View className="flex-row items-center my-2 ">
                <Icon
                  name="location-sharp"
                  size={20}
                  color={appColors.appWhite}
                />
                <CustomText font="bold" className="ml-2 text-white ">
                  Delivery to -{' '}
                </CustomText>
                <CustomText className=" text-secondry">
                  BMC Office, Santacruz
                </CustomText>
                <TouchableOpacity
                  onPress={() => setChangeAddressModal(!changeAddressModal)}>
                  <Icon3
                    name="keyboard-arrow-down"
                    size={23}
                    color={appColors.appWhite}
                  />
                </TouchableOpacity>
              </View>
              <View className="flex-row items-center ">
                <Icon3
                  name="calendar-month"
                  size={22}
                  color={appColors.appWhite}
                />
                <CustomText font="bold" className="ml-1 text-white">
                  Upcoming Delivery Date -{' '}
                </CustomText>
                <CustomText className=" text-secondry">
                  24th April, 2024
                </CustomText>
                <TouchableOpacity
                  onPress={() => setChangeDeliveryDate(!changeDeliveryDate)}>
                  <Icon3
                    name="keyboard-arrow-down"
                    size={23}
                    color={appColors.appWhite}
                  />
                </TouchableOpacity>
              </View>
              <View className="flex-row items-center my-3 bg-white rounded-lg h-fit ">
                <TextInput
                  className="w-[90%] py-2 px-2   "
                  placeholder="Search for the yummiest snacks..."
                  cursorColor={appColors.primary}
                  style={{fontFamily: appFonts?.Poppins}}
                />
                <Icon name="search" size={20} color="#2B2B2B40" />
              </View>
            </View>
          )}

          <View className="my-4 ">
            <FlatList
              data={category}
              horizontal
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => setSelectedCategory(item)}
                  style={[
                    styles?.categoryButton,
                    {
                      backgroundColor:
                        selectedCategory === item
                          ? appColors?.primary
                          : '#FFF2EE',
                    },
                  ]}>
                  <CustomText
                    font="medium"
                    className={` ${
                      selectedCategory === item ? 'text-white' : 'text-gray-500'
                    } `}>
                    {item}
                  </CustomText>
                </TouchableOpacity>
              )}
            />
          </View>
          <AutoSlider />

          <View className="px-2 pb-4 ">
            <CustomText className="text-black ">Best in Namkeen...</CustomText>
            <FlatList
              data={productList}
              scrollEnabled={false}
              renderItem={({item, index}) => (
                <View className="flex-row px-3 py-2 my-2 rounded-lg bg-cardBg">
                  <View className=" w-[70%]">
                    <View className="flex-row items-center ">
                      <CustomText font="medium" className="text-black ">
                        {item?.title}
                      </CustomText>
                      <Image source={greenIcon} className="ml-2 w-7 h-7 " />
                    </View>
                    <CustomText
                      style={{fontSize: 10}}
                      className="text-red-500 ">
                      Customisable
                    </CustomText>
                    <View className="flex-row items-center my-1 ">
                      <PriceTag
                        price={item?.discounted_price}
                        className="text-xl text-primary"
                      />
                      <View className="relative flex-row items-center ml-2 ">
                        <PriceTag
                          price={item?.price}
                          className="text-gray-400 "
                        />
                        <View className="absolute left-0 right-0 h-[2px] bg-gray-400 " />
                      </View>
                    </View>
                    <CustomText className="text-sm text-gray-900 w-[85%] ">
                      {item?.description}
                    </CustomText>
                  </View>
                  <View className=" w-[30%]  rounded-lg relative pb-6">
                    <Image
                      className="w-full h-[110px] rounded-lg "
                      source={require('../assets/images/p1.png')}
                    />
                    <View
                      style={{bottom: 8}}
                      className="absolute left-0 right-0 items-center pt-2 ">
                      {cartItems?.some(val => val?.id === item?.id) ? (
                        <ItemCounter className="w-[70%] py-0 " />
                      ) : (
                        <TouchableOpacity
                          activeOpacity={0.6}
                          className="px-6 mt-4 border rounded-md border-primary bg-buttonBg"
                          onPress={() => {
                            setSelectedProduct(item);
                            setCustomize(true);
                            //addItemsInCart(item)
                          }}>
                          <CustomText font="medium" className=" text-primary">
                            {'Add+'}
                          </CustomText>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>
              )}
            />
          </View>

          <CustomModal
            visible={customize}
            setVisible={setCustomize}
            radius={30}
            onClose={setCustomize}>
            <View className="px-4 pt-10 ">
              <View className="flex-row items-center ">
                <CustomText font="medium" className="text-xl text-appBalck">
                  {selectedProduct?.title}
                </CustomText>
                <Image source={greenIcon} className="ml-2 w-7 h-7 " />
              </View>
              <View className="flex-row my-8 ">
                <Image
                  className="w-24 h-24 rounded-lg "
                  source={require('../assets/images/p1.png')}
                />
                <View className=" w-[77%] ml-2">
                  <CustomText className="text-center ">
                    Made with 4 types of dals, rice, and a handful of masalas.
                    So, with every bite that you take you get burst of textures!
                  </CustomText>
                </View>
              </View>
              <View className="flex-row justify-between px-4 py-2 bg-white rounded-xl">
                <View>
                  <CustomText font="bold" className=" text-appBalck">
                    350g
                  </CustomText>
                  <View className="flex-row items-center ">
                    <CustomText className="text-gray-900 text-[12px] ">
                      ₹345
                    </CustomText>
                    <CustomText className="ml-1 text-[12px] text-gray-400 line-through">
                      ₹445
                    </CustomText>
                  </View>
                </View>
                <View className=" w-[35%] justify-center">
                  <ItemCounter className="py-0.5" quantity={1} />
                </View>
              </View>
              <View className="flex-row justify-between px-4 py-2 my-3 bg-white rounded-xl">
                <View>
                  <CustomText font="bold" className=" text-appBalck">
                    350g
                  </CustomText>
                  <View className="flex-row items-center ">
                    <CustomText className="text-gray-900 text-[12px] ">
                      ₹345
                    </CustomText>
                    <CustomText className="ml-1 text-[12px] text-gray-400 line-through">
                      ₹445
                    </CustomText>
                  </View>
                </View>
                <View className=" w-[30%] justify-center ">
                  <TouchableOpacity onPress={() => addItemsInCart()}>
                    <View className="items-center px-5 py-1.5 rounded-lg bg-buttonBg">
                      <CustomText font="bold" className=" text-primary">
                        Add +
                      </CustomText>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </CustomModal>
          <CustomModal
            visible={changeDeliveryDate}
            setVisible={setChangeDeliveryDate}
            onClose={setChangeDeliveryDate}>
            <View className="items-center pt-10 ">
              <CustomText font="medium" className="text-[28px]  text-primary">
                Delivery Date
              </CustomText>
              <View className="absolute right-6 top-12">
                <TouchableOpacity
                  onPress={() => setChangeDeliveryDate(!changeDeliveryDate)}>
                  <Ionicons
                    name="close-outline"
                    size={30}
                    color={appColors.primary}
                  />
                </TouchableOpacity>
              </View>
              <CustomText>
                Choose a preferred date for your delivery.
              </CustomText>
              <View className="flex-row items-center justify-between w-[85%] mt-10 ">
                <View>
                  <CustomText
                    font="bold"
                    className="text-[16px] text-appBalck/70">
                    Wednesday
                  </CustomText>
                  <CustomText className="text-[16px] text-appBalck/70">
                    24th March, 2024
                  </CustomText>
                </View>
                <CheckBox
                  isCheck={selectedDeliveryDate === 'Wednesday' ? true : false}
                  onPress={() => setSelectedDeliveryDate('Wednesday')}
                />
              </View>
              <View className="flex-row items-center justify-between w-[85%] my-4 ">
                <View>
                  <CustomText
                    font="bold"
                    className="text-[16px] text-appBalck/70">
                    Friday
                  </CustomText>
                  <CustomText className="text-[16px] text-appBalck/70">
                    26th March, 2024
                  </CustomText>
                </View>
                <CheckBox
                  isCheck={selectedDeliveryDate === 'Friday' ? true : false}
                  onPress={() => setSelectedDeliveryDate('Friday')}
                />
              </View>
              <View className="w-[90%] pt-12 ">
                <CustomButton
                  isDisable={true}
                  onPress={() => {}}
                  title="GET OTP"
                />
              </View>
            </View>
          </CustomModal>
          <CustomModal
            visible={changeAddressModal}
            setVisible={setChangeAddressModal}
            onClose={setChangeAddressModal}>
            <View className="items-center pt-10 ">
              <View className="absolute z-30 right-6 top-12">
                <TouchableOpacity onPress={() => setChangeAddressModal(false)}>
                  <Ionicons
                    name="close-outline"
                    size={30}
                    color={appColors.primary}
                  />
                </TouchableOpacity>
              </View>
              {officeSection ? (
                <View className="items-center w-full ">
                  <View className="flex flex-row items-center w-full pl-4 ">
                    <TouchableOpacity
                      onPress={() => setOfficeSection(!officeSection)}
                      activeOpacity={0.6}>
                      <MaterialIcon
                        name="keyboard-arrow-left"
                        color={appColors.primary}
                        size={40}
                      />
                    </TouchableOpacity>
                    <CustomText
                      font="medium"
                      className="text-[28px]  text-primary ml-12  ">
                      Delivery Office
                    </CustomText>
                  </View>
                  <CustomText className="mt-3 ">
                    Choose your delivery location from the list.
                  </CustomText>
                  <View className=" w-[95%] items-center mt-5">
                    <InputField
                      //  onChangeText={handleChange}
                      //  value={office}
                      placeholder="Enter office name"
                      className=" w-[94%]"
                      Icon={<Image source={buildIcon} className="w-6 h-6 " />}
                    />
                    <View className="w-full px-5 py-1 ">
                      <CustomText className="text-sm text-secoundryText">
                        Ex. BMC Office, Santacruz East
                      </CustomText>
                    </View>
                    <View className=" w-[94%] bg-white rounded-md h-[9rem] py-1">
                      <FlatList
                        data={offices}
                        scrollEnabled
                        scrollIndicatorInsets={{right: 1}}
                        renderItem={({item, index}) => (
                          <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => setOffice(item?.name)}>
                            <CustomText className="px-3 py-1 text-black ">
                              {item?.name}
                            </CustomText>
                          </TouchableOpacity>
                        )}
                      />
                    </View>
                  </View>
                  <View className="w-[90%] pt-12 ">
                    <CustomButton
                      isDisable={true}
                      onPress={() => {}}
                      title="CONERM"
                      className="items-center justify-center "
                    />
                  </View>
                </View>
              ) : (
                <>
                  <CustomText
                    font="medium"
                    className="text-[28px]  text-primary">
                    Office Pin Code
                  </CustomText>
                  <CustomText>
                    Input pin code for snack availability.
                  </CustomText>
                  <View className=" w-[90%] mt-10 ">
                    <InputField
                      onChangeText={t => setOfficePinCode(t)}
                      value={officePinCode}
                      maxLength={6}
                      keyboardType="number-pad"
                      placeholder="Enter office pin code"
                      Icon={
                        <Fontisto
                          name="search"
                          size={16}
                          color={appColors.secoundryText}
                        />
                      }
                      className="w-full mb-20 "
                    />

                    <View className="w-full pt-12 ">
                      <CustomButton
                        isDisable={officePinCode?.length > 5 ? false : true}
                        onPress={() => {
                          setOfficeSection(true);
                        }}
                        title="SEARCH OFFICES"
                      />
                    </View>
                  </View>
                </>
              )}
            </View>
          </CustomModal>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet?.create({
  searchBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: appColors?.primary,
    paddingHorizontal: 5,
    top: 55,
    zIndex: 20,
    borderTopWidth: 1,
    borderTopColor: appColors?.appWhite,
  },
  categoryButton: {
    marginHorizontal: 6,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default HomeScreen;
