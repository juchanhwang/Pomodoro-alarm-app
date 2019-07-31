import React, { Component } from 'react';
import { View, AppRegistry, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: 312,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderColor: '#eceef0',
  },
  text: {
    height: 19,
    fontWeight: '500',
    fontStyle: 'normal',
    // opacity: 0.2,
    // fontFamily: 'Rubik',
    fontSize: 16,
    letterSpacing: -0.3,
    color: '#0f2c41',
  },
});

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Enter Pomo Name' };
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
