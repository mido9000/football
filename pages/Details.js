import React, {Component} from 'react';
import {StyleSheet,View,Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class Details extends Component {
  constructor(props) {
    super(props);
    alert(JSON.stringify( this.props.data));
  
  }
render(){
return(
      <View style={{padding:10}}>
      <Card >
        <CardItem>
              <Left>
                <Thumbnail source={{uri :this.props.data.userInfo.profile_picture}} />
                <Body>
                  <Text>mohamed essam</Text>
                  <Text note>{this.props.data.location}</Text>
                </Body>
              </Left>
            </CardItem>  
            <CardItem cardBody>
              <Image source={{uri:this.props.data.pic}} style={{height: 200,padding:5, flex: 1}}/>
            </CardItem>
            <CardItem>
             
              <Body>
              <Text style={{textAlign:"center"}}>{this.props.data.description}</Text>  
              </Body>
            </CardItem>
            <CardItem>
            </CardItem>
      </Card>
      <Button style={{ marginTop: 80, borderRadius: 5, height: 60 }} danger block  onPress={()=>{Actions.Confirm()}}>
              <Text style={{ color: 'white',textAlign:'right',fontWeight:'bold',fontSize:16 }}>Continue</Text>
                          <Icon name='futbol-o' type="FontAwesome" /></Button>

      </View>
      

);
}
}



