import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 312,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    borderWidth: 1,
  },
  section: {
    flexDirection: 'row',
  },
});

const TimerInput = ({}) => (
  <View style={styles.container}>
    <FlatList
      horizontal={true}
      data={[
        { key: 'Devin' },
        { key: 'Jackson' },
        { key: 'James' },
        { key: 'Joel' },
        { key: 'John' },
        { key: 'Jillian' },
        { key: 'Jimmy' },
        { key: 'Julie' },
      ]}
      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
    />
  </View>
);
export default TimerInput;
