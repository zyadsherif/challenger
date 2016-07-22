import React, { Component} from 'react'
import { StyleSheet, Image, View, TextInput, Text, TouchableHighlight, Modal } from 'react-native'
import Dimensions from 'Dimensions'


import Firebase from 'firebase'
import config from '../../config'

import SignupView from './signup'

const provider = new firebase.auth.GoogleAuthProvider()
var windowSize = Dimensions.get('window')


class LoginView extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      modalVisible: false
    }
  }

  _setModalVisible = () => {
    console.log('Somethings are meant to be')
    this.setState( { modalVisible: true } )
  }

  _closeModal = () => {
    this.setState( { modalVisible: false } )
  }

  _signIn = () => {
    console.log(this)
    this.props.navigator.immediatelyResetRouteStack([{'name': 'mainTabs'}])
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bg} source={ require('./img/loginBG.png') } />
        <View style={styles.header}>
            <Image style={styles.mark} source={{uri: 'https://i.imgur.com/da4G0Io.png'}} />
        </View>
        <View style={styles.inputs}>
          <View style={styles.inputContainer, styles.inputUsername}>
            <Text style={styles.whiteFont}>
              Username
            </Text>
            <TextInput
              keyboardType={'email-address'}
              style={[styles.input, styles.whiteFont]}
              value={this.state.username}
              onChangeText={(text) => this.setState({username: text})}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.whiteFont}>
              Password
            </Text>
            <TextInput
              password={true}
              style={[styles.input, styles.whiteFont]}
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>
          <TouchableHighlight onPress={this._signIn} style={styles.signin}>
            <Text style={styles.whiteFont}>Sign In</Text>
          </TouchableHighlight>
          <View style={styles.signup}>
            <Text style={styles.greyFont}>Don't have an account?<Text onPress={this._setModalVisible} style={styles.whiteFont}>  Sign Up</Text></Text>
          </View>
        </View>
        <Modal
          visible={this.state.modalVisible}
          animationType={"slide"}
          transparent={false}
          {...this.state}>
            <SignupView closeModal={this._closeModal}></SignupView>

          </Modal>
      </View>

    )
  }
}

var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: windowSize.width,
      height: windowSize.height
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .5,
      backgroundColor: 'transparent'
    },
    mark: {
      width: 150,
      height: 150
    },
    signin: {
      backgroundColor: '#6563a4',
      padding: 25,
      alignItems: 'center',
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    inputs: {
      backgroundColor: 'rgba(255,255,255,.2)',
      marginTop: 10,
      flex: .3
    },
    inputUsername: {
      borderWidth: 1,
      borderColor: 'transparent',
      borderBottomColor: 'white',
      height: 60,
      padding: 10,
    },
    inputContainer: {
      height: 60,
      padding: 10,
    },
    input: {
      flex: 1,
      fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF'
    }
})
module.exports = LoginView
