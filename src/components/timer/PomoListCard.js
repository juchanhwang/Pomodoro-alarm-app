import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 312,
    height: 77,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: '#666666',
  },
  cardContainer: {
    width: 224,
    justifyContent: 'center',
  },
  cardCategory: {
    height: 14,
    opacity: 0.5,
    fontSize: 12,
    fontWeight: '300',
    fontStyle: 'normal',
    letterSpacing: -0.3,
    color: '#ffffff',
  },
  cardPomoName: {
    height: 19,
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: -0.5,
    color: '#ffffff',
  },
  pageContainer: {
    justifyContent: 'center',
  },
  currentPage: {
    width: 20,
    height: 14,
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: -0.38,
    textAlign: 'right',
    color: '#ffffff',
  },
});

export default class PomoListCard extends Component {
  static defaultProps = {
    category: 'Category name',
    pomoName: 'This is pomo name',
    totalPage: 8,
    CurPage: 8,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardCategory}> {this.props.category} </Text>
          <Text style={styles.cardPomoName}> {this.props.pomoName} </Text>
        </View>
        <View style={styles.pageContainer}>
          <Text style={styles.currentPage}>
            {this.props.CurPage}/{this.props.totalPage}
          </Text>
        </View>
      </View>
    );
  }
}