import React from 'react';
import styled from 'styled-components';
import { Text, View, TouchableOpacity } from 'react-native';

const Button = styled.TouchableOpacity`
  width: 48;
  height: 48;
  borderRadius: 50;
  backgroundColor: #444444;
  textAlign: center;
  alignItems: center;
`;

const PlusVertical = styled.View`
  width: 1;
  height: 14;
  borderStyle: solid;
  borderWidth: 2;
  borderColor: #ffffff;
`;

const PlusHorizontal = styled.View`
  width: 14;
  height: 1;
  borderStyle: solid;
  borderWidth: 2;
  borderColor: #ffffff;
`;

export default () => (
  <Button>
    <PlusVertical />
    <PlusHorizontal />
  </Button>
);
