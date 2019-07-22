import React, { Component } from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

const Container = styled.View`
  width: 312;
  height: 77;
  flexDirection: row;
  justifyContent: center;
  borderRadius: 16;
  backgroundColor: #666666;
`;

const CardContainer = styled.View`
  width: 224;
  justifyContent: center;
`;


const CardCategory = styled.Text`
  height: 14;
  opacity: 0.5;
  fontSize: 12;
  fontWeight: 300;
  fontStyle: normal;
  letterSpacing: -0.3;
  color: #ffffff;
`;

const CardPomoName = styled.Text`
  height: 19;
  fontSize: 16;
  fontWeight: 500;
  fontStyle: normal;
  letterSpacing: -0.5;
  color: #ffffff;
`;

const PageContainer = styled.View`
  justifyContent: center;
`;

const CurrentPage = styled.Text`
  width: 20;
  height: 14;
  fontSize: 12;
  fontWeight: normal;
  fontStyle: normal;
  letterSpacing: -0.38;
  textAlign: right;
  color: #ffffff;

`;

export default class ContentCard extends Component {
  static defaultProps = {
    category: "Category name",
    pomoName: "This is pomo name",
    totalPage: 8,
    CurPage: 8
  };

  render() {
    return (
      <Container>
        <CardContainer>
          <CardCategory> {this.props.category} </CardCategory>
          <CardPomoName> {this.props.pomoName} </CardPomoName>
        </CardContainer>
        <PageContainer>
          <CurrentPage>
            {this.props.CurPage}/{this.props.totalPage}
          </CurrentPage>
        </PageContainer>
      </Container>
    );
  }
}
