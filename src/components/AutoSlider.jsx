import React, {useRef, useEffect, useState} from 'react';
import {View, FlatList, Dimensions, Image} from 'react-native';

const {width} = Dimensions.get('window');

const AutoSlider = () => {
  const flatListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    {
      id: 1,
      text: 'Slide 1',
      img: 'https://images.unsplash.com/photo-1620663858647-89b695e62d45?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      text: 'Slide 2',
      img: 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      text: 'Slide 3',
      img: 'https://images.unsplash.com/photo-1536974735554-66bfa1ede9f4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      text: 'Slide 4',
      img: 'https://plus.unsplash.com/premium_photo-1687874107545-d6ab7ae90d9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      text: 'Slide 5',
      img: 'https://plus.unsplash.com/premium_photo-1687870051961-786b15e78634?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    // Add more slides as needed
  ];

  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setActiveIndex(index);
    //console.log(index);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === data?.length - 1) {
        flatListRef?.current?.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatListRef?.current?.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <View className="my-2 ">
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={({item, index}) => (
          <View style={{width: width}} className="w-full px-2 ">
            <Image
              source={{uri: item?.img}}
              className=" h-[12rem] rounded-lg w-full"
            />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item, index) => `${item.id}-${index}`}
        onScroll={handleScroll}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
      <View className="flex flex-row items-center justify-center my-4 ">
        {data?.map((item, index) => (
          <View key={item?.id} style={{margin: 5}}>
            <View
              className={` bg-primary h-[8px] w-[8px] rounded-full ${
                activeIndex === index ? 'opacity-100' : 'opacity-25'
              } `}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default AutoSlider;
