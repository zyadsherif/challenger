'use strict';
import React from 'react';
import {Navigator, View, Text} from 'react-native';
import Firebase from 'firebase'
import config from '../../config.js'

//VIEWS
import TourView from './tour'
import LoginView from './login'
import MainTabs from './mainTabs'
//VIEWS

const ROUTES = {
  login: LoginView,
  tour: TourView,
  mainTabs: MainTabs
}



class ChallengerRoot extends React.Component{
  constructor(props){
    super(props)
    firebase.initializeApp(config);

  }

  _renderScene = (route, navigator) => {
    var Component = ROUTES[route.name];
    return (
      <Component {...route.props} navigator={navigator} route={route} />
    );
  }
  
  render() {

    return (
      <Navigator
        initialRoute={{
          name: "login",
          type: "right"
        }}
        renderScene={this._renderScene}
      />
    );
  }

}

module.exports = ChallengerRoot
