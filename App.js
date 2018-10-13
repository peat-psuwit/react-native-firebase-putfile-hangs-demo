/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  ActivityIndicator,
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  handleCreatePressed = () => {

  }

  handleUploadPressed = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>RNFirebase PutFile URL bug</Text>

        <View style={styles.activityIndicatorView}>
          <ActivityIndicator size={48} />
        </View>

        <View style={styles.buttonsView}>
          <View style={styles.button}>
            <Button
              title="Create test file"
              onPress={this.handleCreatePressed}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Upload test file"
              onPress={this.handleUploadPressed}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  activityIndicatorView: {
    height: 96,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    margin: 8,
  },
});
