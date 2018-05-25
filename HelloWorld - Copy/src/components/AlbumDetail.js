import React, { Component } from 'react';
import {View,Text, StyleSheet,ScrollView,Alert} from 'react-native';
import Axios from 'axios'
import AlbumItem from './AlbumItem'
import {FetchDataAsyncAwait} from '../helper/Ajax'
import Icon from 'react-native-vector-icons/FontAwesome';

class AlbumDetail extends Component{
    static navigationOptions = {
        title: 'Album Detail',
        drawerIcon: ()=>(<Icon name="rocket" size={30} color="#900" />),
      };
    
    render(){
        //const {navigation} = this.props
        //const title = navigation.getParam('title').title
        return(
            //<View>
            //    <Text>{title}</Text>
            //</View>
            <View>
                <Text>Testing</Text>
            </View>
        )
    }
}
export default AlbumDetail