import React, {Component} from 'react';
import {StyleSheet,View,Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class SingleSession extends Component {
  constructor(props) {
    super(props);
  
  }
render(){
return(
      <View>
      <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../Img/15.png')} />
                <Body>
                  <Text>{this.props.listData.name}</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Img/2.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active type="AntDesign" name="addusergroup" />
                  <Text>{this.props.listData.key}/15</Text>
                </Button>
              </Left>
              <Body>
                
              </Body>
              <Right>
              <Button transparent>
                  <Icon active type="EvilIcons" name="star" />
                  <Text>{this.props.listData.age}</Text>
                </Button>
              </Right>
            </CardItem>
      </Card>
      </View>
      
    


     
    
   

);
}
}


