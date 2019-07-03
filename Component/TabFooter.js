import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Text,Badge,Icon } from 'native-base';
export default class TabFooter extends Component {
  constructor(props) {
    super(props);
 
  }
render(){
return(
    <Container>
        <Content />
        <Footer  >
          <FooterTab style={{backgroundColor:"white"}}>
            <Button  vertical transparent >
                <Icon name="futbol-o" type="FontAwesome" />
            </Button>
            <Button  active badge vertical transparent>
            <Badge ><Text>1</Text></Badge>
              <Icon  name="profile" type="AntDesign"  />
            </Button>
            <Button vertical transparent>
              <Icon active name="pluscircle" type="AntDesign"/>
            </Button>
            <Button vertical transparent>
              <Icon name="alarm" type="MaterialIcons" />
            </Button>
            <Button vertical transparent>
              <Icon name="ios-settings" type="Ionicons" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>

);
}
}

const styles = StyleSheet.create({
  icons:{
    color:"red"
  }
})

