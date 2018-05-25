import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

class AlbumItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={e => this.props.onItemPress(this.props.data)}>
                <View>
                    <View style={styles.container}>
                        <Image style={
                            {
                                width: 50,
                                height: 50,
                            }
                        } source={
                            {
                                uri: this.props.data.thumbnail_image
                            }
                        }>
                        </Image>
                        <View>
                            <Text style={styles.description}>Title:{this.props.data.title}</Text>
                            <Text style={styles.description}>Artist:{this.props.data.artist}</Text>
                        </View>
                    </View>
                    <Image style={
                        {
                            width: 400,
                            height: 300,
                        }
                    } source={
                        {
                            uri: this.props.data.image
                        }
                    }>
                    </Image>
                </View>
            </TouchableOpacity>
        );
    };
}

export default AlbumItem


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    imgcontainer: {
        width: 70,
        height: 50,
    },


    description: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});