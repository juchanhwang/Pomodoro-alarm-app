import React from 'react';
import { Button, Text, View } from 'react-native';

export default class OnboardingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>OnboardingScreen</Text>
        <Button
          title="NEXT"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
