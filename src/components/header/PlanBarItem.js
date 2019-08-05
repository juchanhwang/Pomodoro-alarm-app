import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  result: {
    // width: 16,
    height: 19,
    // fontFamily: "Rubik",
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: -0.5,
    textAlign: 'center',
    color: '#000000',
  },
  title: {
    // width: 25,
    height: 14,
    opacity: 0.6,
    // fontFamily: "Rubik",
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#000000',
  },
});

export default ({ result, title }) => (
  <View>
    <Text style={styles.result}>{result}</Text>
    <Text style={styles.title}>{title}</Text>
  </View>
);
