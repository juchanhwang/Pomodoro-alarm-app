import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// TODO: Should be stackable, requires background color props
const TimerPage = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

TimerPage.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TimerPage;
