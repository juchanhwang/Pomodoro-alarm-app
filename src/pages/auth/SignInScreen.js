import React from 'react';
import {
  AsyncStorage,
  View,
  Button,
} from 'react-native';

class SignInScreen extends React.Component {

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

export default SignInScreen;