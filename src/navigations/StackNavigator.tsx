import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/onBoardingScreens/WelcomeScreen';
import OtpScreen from '../screens/onBoardingScreens/OtpScreen';
import SuccessScreen from '../screens/SuccessScreen';
import SearchPinCode from '../screens/onBoardingScreens/SearchPinCode';
import SearchOffice from '../screens/onBoardingScreens/SearchOffice';
import PersonalDetails from '../screens/onBoardingScreens/PersonalDetailsScreen';
import DrawerNavigation from './DrawerNavigation';
import CartScreen from '../screens/cartScreen/CartScreen';
import SearchScreen from '../screens/searchScreen/SearchScreen';
import CouponsScreen from '../screens/cartScreen/CouponsScreen';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';
import MyOrders from '../screens/myorders/MyOrders';
import MyOrderDetails from '../screens/myorders/MyOrderDetails';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="main" component={DrawerNavigation} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="search_pinCode" component={SearchPinCode} />
        <Stack.Screen name="search_office" component={SearchOffice} />
        <Stack.Screen name="otp" component={OtpScreen} />
        <Stack.Screen name="success" component={SuccessScreen} />
        <Stack.Screen name="cart" component={CartScreen} />
        <Stack.Screen name="search" component={SearchScreen} />
        <Stack.Screen name="coupons" component={CouponsScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="myorders" component={MyOrders} />
        <Stack.Screen name="myorderdetails" component={MyOrderDetails} />
        <Stack.Screen name="personal_details" component={PersonalDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
