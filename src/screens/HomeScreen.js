import React, { Component } from 'react';
import {
  ScrollView,
  Button,
  StyleSheet,
  View,
  Alert
} from 'react-native';

import Info from '../components/Info';
import Config from 'react-native-config';
import { GREETINGS_SCENE_NAME } from '../screens/GreetingsScreen';
import { JSX_SCENE_NAME } from '../screens/JsxScreen';
import { STATE_SCENE_NAME } from '../screens/StateScreen';
import { ANIMATION_SCENE_NAME } from '../screens/AnimationScreen'

import {
  Sentry,
  SentrySeverity,
  init
} from 'react-native-sentry';

Sentry.setTagsContext({
  environment: 'development',
  react: true,
});

Sentry.setUserContext({
  email: 'florent.cerfon@gmail.com',
  //userID: '12341',
  username: 'fcerfon',
  extra: {
    isAdmin: true,
  },
});

export const HOME_SCENE_NAME = 'HOME_SCENE';

const styles = StyleSheet.create({
  margin: {
    marginTop: 10,
  },
});

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.navigate = this.props.navigation.navigate;

    this.navigateToGreetings = this.navigateToGreetings.bind(this);
    this.navigateToJsx = this.navigateToJsx.bind(this);
    this.navigateToState = this.navigateToState.bind(this);
    this.navigateToAnimation = this.navigateToAnimation.bind(this);
  }

  componentDidMount() {
    Alert.alert("test");
  }

  navigateToGreetings() {
    Sentry.captureMessage("navigateToGreetings", {
      level: SentrySeverity.Info
    });
    this.navigate(GREETINGS_SCENE_NAME);
  }

  navigateToJsx() {
    Sentry.captureMessage("navigateToJsx", {
      level: SentrySeverity.Info
    });
    this.navigate(JSX_SCENE_NAME);
  }

  navigateToState() {
    Sentry.captureMessage("navigateToState", {
      level: SentrySeverity.Info
    });
    this.navigate(STATE_SCENE_NAME);
  }

  navigateToAnimation() {
    Sentry.captureMessage("navigateToAnimation", {
      level: SentrySeverity.Info
    });
    this.navigate(ANIMATION_SCENE_NAME);
  }

  printAlert() {
    Alert.alert("button pressed");
  }

  render() {
    return (
      <ScrollView>
        <Info />
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToGreetings}
            title="Greetings"
          />
        </View>

        <View style={styles.margin}>
          <Button
            onPress={this.navigateToJsx}
            title="Jsx"
          />
        </View>
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToState}
            title="State"
          />
        </View>
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToAnimation}
            title="Navigation"
          />
        </View>
        <View style={styles.margin}>
          <Button
            onPress={this.printAlert}
            title="alert"
          />
        </View>
      </ScrollView>
    );
  }
}
