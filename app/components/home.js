import React from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'
import { Container, Content, Header, Title, Button} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'


class HomeView extends React.Component{
  constructor(props){
    super(props)
  }

  _logout = () => {
    this.props.navigator.immediatelyResetRouteStack([{'name': 'login'}])
  }

  _addChallenge = () =>{
    console.log('Open add challenge modal');
  }

  render() {
    return (
      <Container>
          <Header>
              <Button transparent>
                  <Icon style={styles.navIcon} name="settings" />
              </Button>

              <Title>Challenges</Title>

              <Button onPress={this._addChallenge} transparent>
                  <Icon style={styles.navIcon} name="add-circle-outline" />
              </Button>
          </Header>
          <Content>
            
          </Content>
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

module.exports = HomeView
