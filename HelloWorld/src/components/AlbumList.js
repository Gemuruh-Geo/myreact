import React, { Component } from 'react';
import {View,Text, StyleSheet,ScrollView,Alert} from 'react-native';
import Axios from 'axios'
import AlbumItem from './AlbumItem'
import {FetchDataAsyncAwait} from '../helper/Ajax'

class AlbumList extends Component{
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
        this.setState({
            selected_album: data
        })
    }
    renderAlbumList = ()=>{
        return this.state.album_data.map((item,index)=>
            {
                return <AlbumItem data={item} onItemPress={this.setCurrentAlbum} count={index}/>
            })
    }
    render(){
        
        if(this.state.selected_album!=null){
            return(
                <Text>{this.state.selected_album.title}</Text>
            );
        }
        if(this.state.album_data.length >0){
            return(
                <ScrollView>
                    {this.renderAlbumList()}
                </ScrollView>
            );
        }
        return(
            <Text>Home</Text>
        );
        
    };
}
export default AlbumList;