import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {sucessSlug, welcomeSlug} from '../utils/data';
import {appColors} from '../utils/appColors';
import {appFonts} from '../utils/appFonts';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import done from '../assets/images/done.png';
import CustomText from '../components/CustomText';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const SuccessScreen = () => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const navigation = useNavigation();

  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / Width);
    setActivePageIndex(index);
  };

  console.log(activePageIndex);

  return (
    <View className="items-center flex-1 bg-primary">
      <Image source={done} className="w-20 h-20 mt-8 " />
      <CustomText font="bold" className="mt-10 text-3xl text-white">
        Order Placed!
      </CustomText>
      <CustomText
        font="medium"
        className=" w-[70%] text-center text-cardBg text-[16px] mt-5 ">
        Thank you for placing an order with us! We're thrilled to serve you.
      </CustomText>
      <View className="absolute overflow-hidden items-center bottom-0 top-[40%] left-0 pt-6 right-0 rounded-t-[3rem] bg-buttonBg">
        <View className="items-center ">
          <View className="w-24 h-1 bg-gray-400 rounded-3xl " />
        </View>
        <View className="items-center ">
          <FlatList
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            data={sucessSlug}
            keyExtractor={(item, index) => item?.id}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            renderItem={({item, index}) => (
              <View key={item?.id} className="w-screen px-6 text-center ">
                <View className="items-center ">
                  <CustomText
                    font="medium"
                    className="mt-12 mb-10 text-[28px] text-primary">
                    {item?.heading}
                  </CustomText>
                </View>
                <CustomText className="text-lg text-center text-secoundryText">
                  {item?.description}
                </CustomText>
              </View>
            )}
          />
          <View className="flex-row justify-center mb-12 ">
            {sucessSlug?.map((item, index) => (
              <View key={item?.id} style={{margin: 5}}>
                <View
                  className={` bg-primary h-3 w-3 rounded-full ${
                    activePageIndex === index ? 'opacity-100' : 'opacity-25'
                  } `}
                />
              </View>
            ))}
          </View>
          <View className="mb-10 ">
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('myorders')}>
                <CustomText className="underline text-appBalck">
                  View order details
                </CustomText>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex items-center justify-center w-full px-4 mb-8 ">
            <CustomButton
              onPress={() => navigation.navigate('myorders')}
              title="GO BACK TO MY ORDERS"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: appColors.primary,
    alignItems: 'center',
    paddingTop: '2%',
  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    width: '80%',
    fontFamily: appFonts.PoppinsBold,
  },
  bottomPopup: {
    backgroundColor: appColors.secondry,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: Height / 1.7,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    paddingTop: '8%',
  },
  line: {
    height: 4,
    width: 70,
    backgroundColor: 'gray',
    borderRadius: 15,
  },
  header: {
    fontSize: 30,
    color: appColors.primary,
    fontFamily: appFonts.PoppinsBold,
    marginTop: '7%',
    textAlign: 'center',
    width: '70%',
  },
  button: {width: '85%', marginTop: '10%'},
});

export default SuccessScreen;
