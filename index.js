import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import NavigationContainer from './src/NavigationContainer';

import { Sentry } from 'react-native-sentry';

Sentry.config('https://e547b534e7194350bde877767cd3b106@sentry.io/1365601').install();


export default class ReactNativeSample extends Component {
  render() {
    return (
      <NavigationContainer />
    );
  }
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
