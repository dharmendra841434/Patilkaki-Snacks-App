import {View} from 'react-native';
import React from 'react';

const ItemsIcon = () => {
  return (
    <View
      style={{
        borderWidth: 2,
        height: 20,
        borderColor: '#00be62',
        padding: 3,
        marginTop: 5,
      }}>
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 20,
          backgroundColor: '#00be62',
        }}
      />
    </View>
  );
};

export default ItemsIcon;
