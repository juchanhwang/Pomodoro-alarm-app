import React, { Component } from "react";
import { Text, Button, View, StyleSheet, TouchableOpacity } from "react-native";

export default class ContentCard extends Component {
  static defaultProps = {
    result: '1h',
    title: 'plan'
  }

  render() {
    return (
      <View>
        <Text style={styles.result}> {this.props.result} </Text>
        <Text style={styles.title}> {this.props.title} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  result: {
    // width: 16,
    height: 19,
    // fontFamily: "Rubik",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textAlign: "center",
    color: "#000000"
  },
  title: {
    // width: 25,
    height: 14,
    opacity: 0.6,
    // fontFamily: "Rubik",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000"
  }
});
