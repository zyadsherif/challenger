import React from 'react'
import {View, Text, StyleSheet, TextInput, Image} from 'react-native'
import { Container, Content, Header, Title, Button, Icon } from 'native-base';

var steve = require('./img/steve.jpg');

class SignupView extends React.Component{
  constructor(props){
    super(props)
    console.log(props);
    this.state = {
      password: this.props.password,
      passwordConfirmation: '',
      username: this.props.username,
      profilePic: steve
    }
  }

  render = () => {
    return (
      <Container>
          <Header style={{backgroundColor: 'white'}}>
            <Title>Signup</Title>
              <Button onPress={this.props.closeModal} transparent>
                  <Icon name="ios-close" />
              </Button>

              <Button transparent>
              <Icon name="ios-checkmark" />
              </Button>

          </Header>
          <Content>
            <View style={styles.formContainer}>
              <View style={styles.imageContainer} >
                <Image source={this.state.profilePic} style={styles.profilePic}/>
              </View>
              <View style={styles.inputContainer}>
                <Text>
                  Username
                </Text>
                <TextInput
                  keyboardType={'email-address'}
                  style={[styles.input, styles.whiteFont]}
                  value={this.state.password}
                  onChangeText={(text) => this.setState({password: text})}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text>
                  Password
                </Text>
                <TextInput
                  password={true}
                  style={[styles.input, styles.whiteFont]}
                  value={this.state.password}
                  onChangeText={(text) => this.setState({password: text})}
                />
              </View>
              <View style={styles.submit}>
                <Button block primary style={styles.submitButton}>
                  <Icon name="ios-checkmark"></Icon>
                </Button>
              </View>
            </View>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer:{
    flex: 1
  },
  inputContainer:{
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#ddd',
    height: 60,
    padding: 10,
  },
  input:{
    flex: 1,
    fontSize: 14
  },
  imageContainer:{
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center'
  },
  profilePic:{
    width: 150,
    height: 145
  },
  submitButton:{
    borderRadius: 0,
    backgroundColor: '#6563a4',
    height: 60
  }

});

module.exports = SignupView
