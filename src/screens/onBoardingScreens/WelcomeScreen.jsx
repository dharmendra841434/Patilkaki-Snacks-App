import {View, Dimensions, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {welcomeSlug} from '../../utils/data';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import CustomText from '../../components/CustomText';
import OnBoardingWrapper from '../../components/OnBoardingWrapper';
import Logo from '../../assets/images/logo.png';

const Width = Dimensions.get('window').width;

const WelcomeScreen = () => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const navigation = useNavigation();
  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / Width);
    setActivePageIndex(index);
  };

  return (
    <View className="flex-1 pt-16 bg-primary">
      <View className="items-center ">
        <Image source={Logo} className="w-32 h-32 " />
        <CustomText
          font="medium"
          className="mt-5 text-4xl text-center text-white ">
          PatilKaki’s
        </CustomText>
        <CustomText font="medium" className="text-4xl text-center text-white ">
          Unnati Programme
        </CustomText>
      </View>
      <View
        className={` absolute bottom-0 left-0  right-0 py-8 rounded-tl-[3.75rem] rounded-tr-[3.75rem] bg-secondry top-[45%]  `}>
        <View className="items-center ">
          <View className="w-24 h-1 bg-gray-400 rounded-3xl " />
        </View>
        <View className={` px-3`}>
          <View className="relative items-center h-full ">
            <View className="w-full ">
              <FlatList
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                data={welcomeSlug}
                keyExtractor={(item, index) => item?.id}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                renderItem={({item, index}) => (
                  <View
                    style={{
                      width:
                        index === 0
                          ? Width / 1.05
                          : index === 1
                          ? Width / 1.07
                          : index === 2
                          ? Width / 1.05
                          : Width / 1.06,
                    }}
                    key={item?.id}>
                    <View className="items-center w-full ">
                      <CustomText
                        font="bold"
                        className="mt-12 text-[25px] text-primary">
                        {item?.heading}
                      </CustomText>
                      <CustomText
                        font="medium"
                        className=" text-[16px] w-[90%]  mt-6 text-center text-secoundryText">
                        {item?.description}
                      </CustomText>
                    </View>
                  </View>
                )}
              />
              <View className="flex flex-row justify-center mt-6">
                {welcomeSlug?.map((item, index) => (
                  <View key={item?.id} style={{margin: 5}}>
                    <View
                      className={` bg-primary h-[8px] w-[8px] rounded-full ${
                        activePageIndex === index ? 'opacity-100' : 'opacity-25'
                      } `}
                    />
                  </View>
                ))}
              </View>
            </View>

            <View style={{position: 'absolute', bottom: 0}}>
              <CustomButton
                onPress={() => navigation.navigate('search_pinCode')}
                title="EXPLORE YUMMY SNACKS"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
