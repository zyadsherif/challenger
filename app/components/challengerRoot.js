'use strict';
import React from 'react';
import {Navigator, View, Text} from 'react-native';

import TourView from './tour'
import LoginView from './login'
import MainTabs from './mainTabs'

const ROUTES = {
  login: LoginView,
  tour: TourView,
  mainTabs: MainTabs
}

export default React.createClass({
  _renderScene(route, navigator) {
    var Component = ROUTES[route.name];
    return (
      <Component {...route.props} navigator={navigator} route={route} />
    );
  },
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

});
