import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ContentCard from '../components/ContentCard';
import AddButton from '../components/AddButton';
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.Header}>
        <Header />
        <Header />
        <Header />
      </View>
        <ContentCard />
        <AddButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Header: {
    flexDirection: "row",
    justifyContent: "center"
  }
});
