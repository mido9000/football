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
          {/* <ListItem avatar>
        <Left>
          <Thumbnail  source={require('../Img/15.png')} />
        </Left>
        <Body>
          <Text>Kumar Pratik</Text>
          <Text note>Doing what you like will always keep you happy . .</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem> */}
      <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../Img/15.png')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Img/15.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active type="EvilIcons" name="heart" />
                  <Text>/15 Particpant</Text>
                </Button>
              </Left>
              <Body>
                
              </Body>
              <Right>
              <Button transparent>
                  <Icon active type="EvilIcons" name="star" />
                  <Text>4 </Text>
                </Button>
              </Right>
            </CardItem>

      <Text>{this.props.listData.name}</Text>
      <Text>{this.props.listData.key}</Text>
      <Text>{this.props.listData.age}</Text>
      </Card>
      </View>
      
    


     
    
   

);
}
}


