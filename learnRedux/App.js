/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import store  from './src/store/index';
import {Provider } from 'react-redux';
import MyApp from './src/MyApp'

export default class App extends Component {

  render() {
    return (
      
      <Provider store={store}>
         <MyApp/>
      </Provider>
    );
  }
}


