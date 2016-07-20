import React, { Component} from 'react'
import { StyleSheet, Image, View } from 'react-native'
import Dimensions from 'Dimensions'
import { Container, Content, Button, Text } from 'native-base'

const windowSize = Dimensions.get('window')

class LoginView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bg} source={{uri: 'https://i.imgur.com/xlQ56UK.jpg'}} />
          <View style={styles.button_container}>
            <View style={styles.logo_container}>
              <Image style={styles.logo} source={{uri: 'https://i.imgur.com/da4G0Io.png'}}/>
            </View>
            <Button block success>Login with Google</Button>
          </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent',
    width: null,
    height: null
  },
  bg:{
      position: 'absolute',
      left: 0,
      top: 0,
      width: windowSize.width,
      height: windowSize.height
  },
  button_container:{
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 100
  },

  logo_container: {
    marginTop: 100
  },
  logo: {
    width: 150,
    height: 150
  }
})

module.exports = LoginView
