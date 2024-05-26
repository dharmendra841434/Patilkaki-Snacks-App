import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/cartScreen/CartScreen';
import SearchScreen from '../screens/searchScreen/SearchScreen';
import CouponsScreen from '../screens/cartScreen/CouponsScreen';
import DrawerMenu from './DrawerContent';
import {Drawer} from 'react-native-drawer-layout';
import ProfileDrawerContent from './ProfileDrawerContent';
import {useDispatch, useSelector} from 'react-redux';
import {setDrawerOpen} from '../reduxManagment/splice/appSlice';

const DrawerNav = createDrawerNavigator();

const DrawerNavigation = () => {
  const profileDrawer = useSelector(state => state?.app?.profileDrawer);
  const dispatch = useDispatch();

  return (
    <Drawer
      open={profileDrawer}
      onOpen={() => dispatch(setDrawerOpen(true))}
      onClose={() => dispatch(setDrawerOpen(false))}
      drawerPosition="right"
      drawerStyle={{
        backgroundColor: 'rgb(0,0,0,0.4)',
      }}
      renderDrawerContent={() => <ProfileDrawerContent />}>
      <DrawerNav.Navigator
        initialRouteName="home"
        drawerContent={props => <DrawerMenu props={props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: 'rgb(0,0,0,0.4)',
          },
        }}>
        <DrawerNav.Screen name="home" component={HomeScreen} />
      </DrawerNav.Navigator>
    </Drawer>
  );
};

export default DrawerNavigation;
