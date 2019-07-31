import React from 'react';
import { View, StyleSheet } from 'react-native';
import PlanBarItem from '../components/PlanBarItem';
import PomoListCard from '../components/PomoListCard';
import FloatingButton from '../components/FloatingButton';
import Input from '../components/Input';
import CategoryButton from '../components/CategoryButton';
import RoutineInput from '../components/RoutineInput';
import TimerInput from '../components/TimerInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PlanBarItem: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.PlanBarItem}>
          <PlanBarItem title="plan" result="1h" />
        </View>
        <PomoListCard />
        <FloatingButton />
        <Input />
        <CategoryButton text="category name" />
        {/* <RoutineInput /> */}
        <TimerInput />
      </View>
    );
  }
}
