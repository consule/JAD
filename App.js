
import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Body, Title, Text } from 'native-base';
import TabJesus from './pages/tabJesus';
import TabApostolos from './pages/tabApostolos';
import TabDeus from './pages/tabDeus';

export default class JAD extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs >
          <Body>
            <Text style={{ color: '#fff', fontSize: 18, textAlign: "center" }}>JAD - Jesus, apóstolos e Deus</Text>
          </Body>
        </Header>
        <Tabs>
          <Tab heading="Jesus">
            <TabJesus />
          </Tab>
          <Tab heading="Apóstolos">
            <TabApostolos />
          </Tab>
          <Tab heading="Deus">
            <TabDeus />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

