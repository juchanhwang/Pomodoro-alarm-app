import React, { Component } from 'react';
import { View, AppRegistry, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: 312,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  text: {
    width: 106,
    height: 24,
    marginLeft: 20,
    color: '#222222',
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: -0.38,
  },
});

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'PomoPomo' };
  }

  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          onChangeText={text => this.setState({ text })}
          value={text}
        />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
