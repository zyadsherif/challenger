import React from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'
import { Container, Content, Header, Title, Button} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'


class ProfileView extends React.Component{
  constructor(props){
    super(props)
  }

  _logout = () => {
    this.props.navigator.immediatelyResetRouteStack([{'name': 'login'}])
  }

  render() {
    return (
      <Container>
          <Header>
              <Button transparent>
                  <Icon style={styles.navIcon} name="settings" />
              </Button>

              <Title>Profile</Title>

              <Button onPress={this._logout} transparent>
                  <Icon style={styles.navIcon} name="exit-to-app" />
              </Button>
          </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navIcon:{
    fontSize: 27,
    color: '#d1d1d1'
  }
})

module.exports = ProfileView
