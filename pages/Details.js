import React, {Component} from 'react';
import {StyleSheet,View,Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class Details extends Component {
  constructor(props) {
    super(props);
  
  }
render(){
return(
      <View style={{padding:10}}>
      <Card >
        <CardItem>
              <Left>
                <Thumbnail source={require('../Img/15.png')} />
                <Body>
                  <Text>mohamed essam</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>  
            <CardItem cardBody>
              <Image source={require('../Img/2.jpg')} style={{height: 200,padding:5, flex: 1}}/>
            </CardItem>
            <CardItem>
             
              <Body>
              <Text style={{textAlign:"center"}}>fkodihuidrhviuherkvknerkbgjhbijerhiubhidbviudnlkvjrevmoirjreoijvidflvoldufvhdh
                vjfifdvuidfuvjdfnvijndfivnvuinviunvidfnfduinvideuvnheriviuuivvicjdocoiocisdcicsiosnc</Text>  
              </Body>
            </CardItem>
            <CardItem>
            </CardItem>
      </Card>
      <Button style={{ marginTop: 80, borderRadius: 5, height: 60 }} danger block  onPress={()=>{Actions.Home()}}>
              <Text style={{ color: 'white',textAlign:'right',fontWeight:'bold',fontSize:16 }}>Continue</Text>
                          <Icon name='futbol-o' type="FontAwesome" /></Button>

      </View>
      

);
}
}



