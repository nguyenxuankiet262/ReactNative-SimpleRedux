import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Header from './Header'
import Body from './Body';

export default class App extends Component{
  render(){
    return (
      <View style = {styles.container}>
        <Header/>
        <Body/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

