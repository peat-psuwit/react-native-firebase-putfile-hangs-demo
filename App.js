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
  ToastAndroid,
  View,
} from 'react-native';

import RNFS from 'react-native-fs';
import firebase from 'react-native-firebase';

const storage = firebase.storage();

type Props = {};
type State = {
  working: boolean,
};

const TEST_FILE_PATH = `${RNFS.DocumentDirectoryPath}/test.txt`;

export default class App extends Component<Props, State> {
  state = {
    working: false,
  };

  handleCreatePressed = async () => {
    this.setWorking(true);

    try {
      await RNFS.writeFile(TEST_FILE_PATH, 'This is a test.', 'utf8');
      ToastAndroid.show('Test file created.', ToastAndroid.SHORT);
    } finally {
      this.setWorking(false);
    }
  }

  handleUploadPressed = async () => {
    this.setWorking(true);

    try {
      // $FlowFixMe: filePath is an Object? Really?
      await storage.ref('/test.txt').putFile(TEST_FILE_PATH);
      ToastAndroid.show('Test file uploaded.', ToastAndroid.SHORT);
    }
    finally {
      this.setWorking(false);
    }
  }

  setWorking(working: boolean) {
    this.setState({ working });
  }

  render() {
    const { working } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>RNFirebase PutFile URL bug</Text>

        <View style={styles.activityIndicatorView}>
          {working
            ? <ActivityIndicator size={48} />
            : null
          }
        </View>

        <View style={styles.buttonsView}>
          <View style={styles.button}>
            <Button
              title="Create test file"
              onPress={this.handleCreatePressed}
              disabled={working}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Upload test file"
              onPress={this.handleUploadPressed}
              disabled={working}
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
