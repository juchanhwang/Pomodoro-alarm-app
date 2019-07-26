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

const Page = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
