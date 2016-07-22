import React from 'react'
import {
  View,
  Text,
  TabBarIOS,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import ProfileView from './profile'
import ExploreView from './explore'
// import ProfileView from './profile'

class MainTabs extends React.Component{
  constructor(props){
    super(props)

    this.state = {selectedTab: 'homeTab'}
  }
  render() {
    return (
      <TabBarIOS
        unselectedTintColor="white"
        tintColor="#50d2c2"
        unselectedTintColor="#2e7970"
        barTintColor="white">
        <Icon.TabBarItem
          title="Home"
          iconName="home"
          color={'#2e7970'}
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'homeTab',
            });
          }}
          >
          <View style={styles.tabContent}><Text>Home Tab</Text></View>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Explore"
          iconName="explore"
          selected={this.state.selectedTab === 'exploreTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'exploreTab',
            });
          }}
          >
          <ExploreView></ExploreView>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Notifications"
          iconName="notifications-none"
          selected={this.state.selectedTab === 'notificationsTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'notificationsTab',
            });
          }}
          >
          <View style={styles.tabContent}><Text>Notifications Tab</Text></View>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Profile"
          iconName="face"
          selected={this.state.selectedTab === 'profileTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'profileTab',
            });
          }}
          >
          <ProfileView {...this.props}></ProfileView>
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  tabContent:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navbarIcon:{
    color: '#2e7970'
  }
})

module.exports = MainTabs
