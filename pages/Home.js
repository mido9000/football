import React, { Component } from 'react';
import { Text, Image,Dimensions } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Icon, View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import TabFooter from '../Component/TabFooter';
export default class Home extends Component {
  constructor(props) {
    super(props);
 
  }

  render() {
    let screenWidth=Dimensions.get('window').width;
    return (
    <View style={{flex:2}}>
      <Text style={{textAlign:'center',fontSize:30}}>mohamed</Text>
    <Image  style={{ width:screenWidth,height:screenWidth*500/1000,marginTop:10,marginBottom:30}} source={require('../Img/6.jpg')}></Image>
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Image  style={{height:100,width:100,marginBottom:20}} source={require('../Img/5.png')}></Image>
    </View>
    <View style={{flex:2 ,paddingBottom:100}}>
    <Image  style={{ width:screenWidth,height:screenWidth*500/1000,marginTop:10}} source={require('../Img/4.jpg')}></Image>
    </View>
    <View style={{flex:1}}>
    <TabFooter></TabFooter>
    </View>
   
    </View>
    );
  }
}


