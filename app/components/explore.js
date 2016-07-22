import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TimeAgo from 'react-native-timeago'
import { Container, Content, Header, Title, Button, List, ListItem} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'

var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];

var timestamp = "2015-06-21T06:24:44.124Z";



class ExploreView extends React.Component{
  constructor(props){
    super(props)
  }

  _renderItem = (item) => {
    return(
      <ListItem>
        <View>
          <Text>{item}</Text>
          <Text style={styles.timestamp}><TimeAgo time={timestamp} /></Text>
        </View>
      </ListItem>
    )
  }

  render() {
    return (
      <Container>
          <Header style={styles.navBar}>
              <Title>Notifications</Title>
          </Header>
          <Content>
            <List dataArray={items}
                renderRow={(item) => this._renderItem(item)}>
            </List>
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
  navBar:{
    backgroundColor: '#50d2c2',
  },
  navIcon:{
    fontSize: 27,
    color: '#d1d1d1'
  },
  timestamp:{
    fontSize: 10,
  },
})

module.exports = ExploreView
