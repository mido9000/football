import React, { Component } from 'react'
import {Text,Alert} from 'react-native';
import * as firebase from "firebase";
import { View } from 'native-base';

var ref = firebase.database().ref("Pages/About");
export default class About extends Component {  
  constructor(props){
    super(props);
   this.state={
      about:''
    }
      this.Data();
  }
  Data()
  {
    ref.once("value",(data)=>{
    //  Alert.alert(data.toJSON());
    this.setState({
      about:data.toJSON()
    })
    })
  }
  render() {
    return (
      <View>

      <Text style={{fontSize:30,textAlign:"center"}}>{this.state.about}</Text>
      </View>
    )
  }
}
