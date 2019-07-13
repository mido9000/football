import React, {Component} from 'react';
import {StyleSheet,View,Image,TouchableWithoutFeedback} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class SingleSession extends Component {
  constructor(props) {
    super(props);

    //alert(JSON.stringify(props.listData) )
    alert(JSON.stringify(props.listData.userInfo.profile_picture.uri))
  
  }
render(){
return(
      <View>
         <TouchableWithoutFeedback onPress={()=>{Actions.Details()}}>
      <Card>
     
            <CardItem >
              <Left>
                {/* <Thumbnail source={require('../Img/15.png')} /> */}
                <Thumbnail source={{uri :this.props.listData.userInfo.profile_picture.uri}} />
                <Body>
                  <Text>{this.props.listData.location}</Text>
                  <Text note>{this.props.listData.userInfo.email}</Text>
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
                  <Text>/15</Text>
                </Button>
              </Left>
              <Body>
                
              </Body>
              <Right>
              <Button transparent>
                  <Icon active type="EvilIcons" name="star" />
                  <Text>{this.props.listData.date}</Text>
                </Button>
              </Right>
            </CardItem>
      </Card>
      </TouchableWithoutFeedback>
     
      </View>
      
    


     
    
   

);
}
}



