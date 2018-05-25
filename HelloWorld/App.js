/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AlbumHeader from './src/components/AlbumHeader';
import AlbumItem from './src/components/AlbumItem';
import AlbumList from './src/components/AlbumList'
import AlbumFlatList from './src/components/AlbumFlatList';
import { createStackNavigator,createDrawerNavigator } from 'react-navigation';
import AlbumDetail from './src/components/AlbumDetail'

type Props = {};

const RootStack = createStackNavigator(
  {
    Home: AlbumFlatList,
    Details: AlbumDetail,
  },
  {
    initialRouteName: 'Home',
  }
);


const MyDrawerNav = createDrawerNavigator({
  Home: {
    screen: AlbumFlatList,
  },
  Notifications: {
    screen: AlbumDetail,
  },
});

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <MyDrawerNav/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
