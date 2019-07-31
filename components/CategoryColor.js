import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  categoryStyle: {
    width: 14,
    height: 14,
    marginRight: 12,
    borderRadius: 3,
  },
});

const CategoryColor = ({ color }) => (
  <View style={styles.categoryStyle} />
);

export default CategoryColor;
