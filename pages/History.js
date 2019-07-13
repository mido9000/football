import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import TabFooter from '../Component/TabFooter';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
export default class History extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        {/* <Header hasTabs /> */}
        <Tabs>
          <Tab heading="Sessions history">
            <Tab1 />
          </Tab>
          <Tab heading="Games history">
            <Tab2 />
          </Tab>
        </Tabs>
        <TabFooter></TabFooter>
      </Container>
    );
  }
}


