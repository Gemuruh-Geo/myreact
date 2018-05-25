import React, { Component } from 'react';
import {View,Text, StyleSheet} from 'react-native';

class AlbumHeader extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Albums</Text>
            </View>
        );    
    }
}

export default AlbumHeader;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: 'powderblue',
        alignItems:'center'
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  });