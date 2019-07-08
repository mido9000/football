import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Footer, FooterTab, Button, Text,Badge,Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Home from '../pages/Home';
export default class TabFooter extends Component {
  constructor(props) {
    super(props);
  
  }
render(){
return(
        <Footer >
          <FooterTab style={{backgroundColor:'white'}}>
            <Button  vertical transparent onPress={()=>{Actions.Home()}} >
                <Icon name="futbol-o" type="FontAwesome" />
            </Button>
            <Button vertical transparent onPress={()=>{Actions.Locations()}}>
              <Icon name="location-pin" type="Entypo" />
            </Button>
            <Button vertical transparent onPress={()=>{Actions.Upload()}} >
              <Icon active name="pluscircle" type="AntDesign"/>
            </Button>
            <Button  active badge vertical transparent onPress={()=>{Actions.Notifications()}}>
            <Badge ><Text>1</Text></Badge>
              <Icon  name="profile" type="AntDesign"  />
            </Button>
            <Button vertical transparent onPress={()=>{Actions.Settings()}}>
              <Icon name="ios-settings" type="Ionicons" />
            </Button>
          </FooterTab>
        </Footer>
   

);
}
}

const styles = StyleSheet.create({
  icons:{
    color:"red"
  }
})

