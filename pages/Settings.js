import React, { Component } from 'react';
import { Text, Image, Dimensions } from 'react-native';
import { Container, Content, Icon, List, ListItem, Left, Right, Footer } from 'native-base';
import { Actions } from 'react-native-router-flux';
import TabFooter from '../Component/TabFooter';
export default class Settings extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <Container>
        <Text style={{ textAlign: 'center', fontSize: 30 }}>mohamed</Text>
        <Content >
          <List>
            <ListItem noIndent style={{ backgroundColor: "#F6F6F6" }}>
              <Left>
                <Text>Account</Text>
              </Left>
            </ListItem>
            <ListItem >
              <Left>
                <Text>Edit Profile</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Change Password</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem noIndent style={{ backgroundColor: "#F6F6F6" }}>
              <Left>
                <Text>Other</Text>
              </Left>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Privacy Policy</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Contact Us</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>About App</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Logout</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
        <TabFooter></TabFooter>
      </Container>
    );
  }
}


