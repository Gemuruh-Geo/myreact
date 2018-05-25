import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { addArticle } from './actions/index';
import { connect } from "react-redux";
import  store  from './store/index';

const mapStateToProps = state => {
    return { articles: state.articles };
  };

  const mapDispatchToProps = dispatch => {
    return {
      addArticleActionProps: article => dispatch(addArticle(article))
    };
  };
class MyApp extends Component{

    
    constructor(props) {
        super(props)
    }

    renderArtilce = ()=>{
        return(
            this.props.articles.map(item => {
                return(
                    <Text>{item.name}</Text>
                )
            })
        );
    }
    addNewArticle = () => {
        this.props.addArticleActionProps({ name: 'React Redux Tutorial for Beginners', id: 1 })
        console.log('[Add Article]', this.props.articles);
    }
    render(){
        return(

        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
        </Text>
          <Button onPress={this.addNewArticle} title='Add Article' />
          {this.renderArtilce()}
        </View>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyApp);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
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