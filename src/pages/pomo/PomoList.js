import React from 'react';
import { Text } from 'react-native';
import Page from '../../containers/Page';
import PlanBarItem from '../../components/planbar/PlanBarItem';
import PomoListCard from '../../components/timer/PomoListCard'

export default class PomoList extends React.Component {
  render() {
    return (
      <Page>
        {/* <HeaderText />
        <PlanBar>
          <PlanBarItem />
          <PlanBarItem />
          <PlanBarItem />
        <PlanBar/>
        <PomoListView>
          state.map => <PomoListCard />
        </PomoListView>
        <FloatingCard /> */}
        <PlanBarItem result="result" title="title" />
        <PomoListCard category="category" pomoName="pomoName" />
      </Page>
    );
  }
}
