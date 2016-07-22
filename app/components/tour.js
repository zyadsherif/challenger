'use strict';

import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Component
} from 'react-native'

// import { Container, Content, Card, CardItem, Text, Icon } from 'native-base'
import Swiper from 'react-native-swiper'


var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

class TourView extends React.Component{

  _signIn = () =>{
    this.props.navigator.push({
      name: 'login',
      props: {exampleProp: 25}
    })
  }

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <TouchableHighlight onPress={this._signIn} style={styles.signin}>
              <Text style={styles.text}>Sign In</Text>
          </TouchableHighlight>
        </View>
      </Swiper>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  signin: {
      backgroundColor: '#FF3366',
      padding: 20,
      alignItems: 'center'
  },

})
module.exports = TourView
