import React, { Component } from 'react';
import Icon from 'react-native-ionicons';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  icon: {
    // color: 'green',
  },
});

export default class FloatingButton extends Component {
  onPressButton() {}

  render() {
    return (
      <View>
        <Icon
          style={styles.icon}
          onPress={this.onPressButton}
          ios="add-circle"
          size={48}
        />
      </View>
    );
  }
}