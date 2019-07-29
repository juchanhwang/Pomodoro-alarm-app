import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-ionicons';

const styles = StyleSheet.create({
  button: {
    width: 312,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryColor: {
    width: 14,
    height: 14,
    marginRight: 12,
    borderRadius: 3,
    backgroundColor: '#222222',
  },
  text: {
    width: 110,
    height: 19,
    // fontFamily: "Rubik",
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: -0.3,
    color: '#444444',
  },
});

const CategoryButton = ({ text }) => (
  <TouchableOpacity style={styles.button}>
    <View style={styles.categoryColor} />
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

CategoryButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CategoryButton;
