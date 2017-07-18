import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import NavigationContainer from './src/NavigationContainer';

import { Sentry } from 'react-native-sentry';

Sentry.config("https://1f1003332bf74bfc853e2e2a32602f14:d2048dda7b2841b1836f796d6e5a6850@sentry.io/192716").install();


export default class ReactNativeSample extends Component {
  render() {
    return (
      <NavigationContainer />
    );
  }
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
