import React, { Component } from 'react';
import {View,Text, StyleSheet,TouchableOpacity} from 'react-native';

class Helloworld extends Component{

    state = {
        myMessages: "Hello The curl world"
    }

    updateState = () =>{
        this.setState({
            myMessages: "Another Messages 2"
        })
    }
    render(){
        return(
            <TouchableOpacity onPress={this.updateState}>
                <View style={style.viewStyle}>
                    <Text style={style.textStyle}>Hello world Component {this.state.myMessages}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}


const style = StyleSheet.create({
    viewStyle:{
        backgroundColor: 'blue',
        borderColor: '#000',
    },
    textStyle:{
        fontSize: 50,
    }
});
export default Helloworld