import React, { Component } from 'react';
import {View,Text, StyleSheet,ScrollView,Alert,FlatList} from 'react-native';
import Axios from 'axios'
import AlbumItem from './AlbumItem'
import {FetchDataAsyncAwait} from '../helper/Ajax'

class AlbumFlatList extends Component{
    static navigationOptions = {
        title: 'Home',
      };
    
    constructor(props){
        super(props);
        this.state = {
            album_data:[],
            selected_album: null
        }
    }

    async componentDidMount(){
        let url = "http://rallycoding.herokuapp.com/api/music_albums";
        //Axios.get(url).then(response=>this.setState({
        //    album_data: response.data
        //}))

        let json = await FetchDataAsyncAwait(url)
        this.setState({
            album_data: json
        })

    }

    setCurrentAlbum = (data) =>{
        this.props.navigation.navigate('Details',{
            title: data
        })
    }
    renderAlbumList = ()=>{
        return this.state.album_data.map((item,index)=>
            {
                return <AlbumItem data={item} onItemPress={this.setCurrentAlbum} count={index}/>
            })
    }

    _keyExtractor = (item, index) => item.id;

    render(){
        
        if(this.state.selected_album!=null){
            return(
                <Text>{this.state.selected_album.title}</Text>
            );
        }
        if(this.state.album_data.length >0){
            return(
                <FlatList
                    data={this.state.album_data}
                    renderItem={({item})=><AlbumItem data={item} onItemPress={this.setCurrentAlbum}/>}
                    keyExtractor={this._keyExtractor}
                />
            );
        }
        return(
            <Text>Home</Text>
        );
        
    };
}
export default AlbumFlatList;