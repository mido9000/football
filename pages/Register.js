import React, { Component } from 'react';
import { StyleSheet, Text, Alert, Image } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Icon, View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import * as firebase from "firebase";
import {AsyncStorage} from 'react-native';
import ImagePicker from 'react-native-image-picker';
const options = {
title: 'Select Avatar',
takePhotoButtonTitle:'take photo with camera',
chooseFromLibraryButtonTitle:'Choose Photo from Library',
  
};
var database = firebase.database();
var storage = firebase.storage();
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      password: '',
      confirmPassword: '',
      name: '',
      avatarSource:require('../Img/15.png')
    };

  }
  onRegister() {
    const { name, Email, password, avatarSource } = this.state;
    let  user={
      Dname:name,
      Demail:Email,
      Dpass:password,
      DImg:avatarSource
    }
    var promise =new Promise((resolve,reject)=>{
      firebase.auth().createUserWithEmailAndPassword(Email, password).then((res)=>{
    
        var newPostKey = firebase.database().ref().child('test').push().key;
          firebase.database().ref('test/'+newPostKey).set({
            username: name,
            email: Email,
            profile_picture : avatarSource,
            userpassword:password,
            userkey:newPostKey
          });
         
        if(res){
          AsyncStorage.setItem('userD', JSON.stringify(user), () => {
          AsyncStorage.getItem('userD', (err, result) => {
                console.log(result);
                Alert.alert(result);
            });
          });
        //  Alert.alert("done");
          Actions.Home();
        }
      })
      .catch(function(error) {
        Alert.alert("error"+error);
      });
    })
   
  //  Alert.alert('userData', `${name}+${Email} + ${password} ${confirmPassword}`);
  //  console.log(name);
  }
  pickerImg(){
   // Alert.alert('clicked');
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource: source,
        });
      }
    });
  }
  render() {
    return (
      <Container style={{ padding: 5 }}>
        <Content>
          <Form style={{ flex: 1 }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 100, height: 100, alignItems: 'center',borderRadius:50 }} source={this.state.avatarSource}></Image>
              <Icon style={{color:'#F58524'}} name='edit' type='AntDesign'onPress={()=>{this.pickerImg()}} />
            </View>

            <Item stackedLabel>
              <Label>Name</Label>
              <Input value={this.state.name} onChangeText={(name) => this.setState({ name })} placeholder={'Enter Your Name'} />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input value={this.state.Email} autoCompleteType={"email"} onChangeText={(Email) => this.setState({ Email })} placeholder={'Enter Your Email'} />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input value={this.state.password} maxLength={16} onChangeText={(password) => this.setState({ password })} secureTextEntry={true} placeholder={'Enter Your password'} />
            </Item>
            <Item stackedLabel last>
              <Label>Confirm Password</Label>
              <Input value={this.state.confirmPassword} maxLength={16} onChangeText={(confirmPassword) => this.setState({ confirmPassword })} secureTextEntry={true} placeholder={'Confirm Your password'} />
            </Item>
            <Button style={{ marginTop: 20, borderRadius: 5, height: 60 }} danger block onPress={() => { this.onRegister() }}><Text style={{ color: 'white', fontSize: 16, textAlign: 'right', fontWeight: 'bold' }}>Register</Text></Button>
            <Label style={{ textAlign: 'center', paddingTop: 20, color: '#707070' }}>You alerady have an account?
            <Text style={{ color: '#F58524' }} onPress={() => { Actions.Login() }} >Login</Text></Label>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
