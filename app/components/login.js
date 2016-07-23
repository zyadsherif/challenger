import React, { Component} from 'react'
import { StyleSheet, Image, View, TextInput, Text, TouchableHighlight, Modal } from 'react-native'
import Dimensions from 'Dimensions'
import { Container, Content, Header, Title, Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'


import Firebase from 'firebase'
import config from '../../config'

import SignupView from './signup'

const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
  AccessToken
} = FBSDK;

const provider = firebase.auth.FacebookAuthProvider;
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

  _fbSignIn = () => {
    var that = this;
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          console.log(result.grantedPermissions.toString());
          AccessToken.getCurrentAccessToken()
          .then(accessTokenData => {
              const credential = provider.credential(accessTokenData.accessToken);
              Firebase.auth().signInWithCredential(credential).then(function(data){
                that._signIn();
              });
          })
          .then(credData => {
              console.log(credData);
          })
          .catch(err => {
              console.log(err);
          });
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );
  }

  _firbaseFBSignIn = (result) =>{
    // var customToken = firebase.auth().credentialWithAccessToken(result.accessToken);
    firebase.auth().credentialWithAccessToken(result.accessToken).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    // firebase.auth().signInWithCredential(result).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // [START_EXCLUDE]
    //   if (errorCode === 'auth/account-exists-with-different-credential') {
    //     alert('You have already signed up with a different auth provider for that email.');
    //     // If you are using multiple auth providers on your app you should handle linking
    //     // the user's accounts here.
    //   } else {
    //     console.error(error);
    //   }
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bg} source={ require('./img/loginBG.png') } />
        <View style={styles.header}>
            <Image style={styles.mark} source={{uri: 'https://i.imgur.com/da4G0Io.png'}} />
        </View>
        <View style={styles.inputs}>
          <Button style={styles.fbBtn} block onPress={this._fbSignIn}>
            <View style={styles.fbBtnView}>
              <Icon name="facebook" style={styles.fbBtnIcon} >
              </Icon>
              <Text style={styles.fbBtnText}>
                Login with Facebook
              </Text>
            </View>
          </Button>
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
    inputs: {
      marginTop: 10,
      flex: .3,
      padding: 20
    },
    input: {
      flex: 1,
      fontSize: 14
    },
    fbBtn:{
      backgroundColor: '#3b5998',
      height: 60,
    },
    fbBtnView:{
      flex: 1,
      flexDirection: 'row',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center'
    },
    fbBtnIcon:{
      paddingLeft: 10,
      flex: 1,
      fontSize: 24,
      color: 'white',
      },
    fbBtnText:{
      flex: 3,
      color: 'white',
      fontSize: 16
    }
})
module.exports = LoginView
