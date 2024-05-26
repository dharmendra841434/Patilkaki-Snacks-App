import {StatusBar} from 'react-native';
import React from 'react';
import StackNavigator from './navigations/StackNavigator';
import {Provider} from 'react-redux';
import {store} from './reduxManagment/store/store';
import '../global.css';
import {appColors} from './utils/appColors';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={appColors.primary} barStyle="light-content" />
      <StackNavigator />
    </Provider>
  );
};

export default App;
