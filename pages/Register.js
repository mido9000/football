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
      mobile: '',
      name: '',
      avatarSource:require('../Img/15.png'),
      nameValidate:true,
      passwordValidate:true,
      EmailValidate:true
    };

  }
  errorMsg(text,type)
{
   if(!this.state.nameValidate)
   {
     alert("username must be from a-z,A-z");

   }
    else if(!this.state.passwordValidate)
   {
    alert("password must contain \n at least 1 lowercase , Uppercase alphabetical character \n must conatin \n at least 1 numeric character\n at least one special character\n must be at least 8 characters");

   }
   else if(!this.state.EmailValidate)
   {
    alert("Email must be like this: mysite@ourearth.com or like this: mysite@you.me.net");
   }
   
}
 
validate(text,type)
{
if(type=='username')
{
    if(alpha.test(text))
    {
        this.setState({
            nameValidate:true,
        })
    }
    else
    {
          this.setState({
            nameValidate:false,
        })
    }
}
else if(type=='password')
{
    if(num.test(text))
    {
        this.setState({
            passwordValidate:true,
        })
    }
    else
    { 
         this.setState({
            passwordValidate:false,
        })
    }
    
}
else if(type=='Email')
{
    if(emailvaild.test(text))
    {
        this.setState({
            EmailValidate:true,
        })
    }
    else
    { 
         this.setState({
            EmailValidate:false,
        })
    }
    
}

}
  onRegister() {
    const { name, Email, password, avatarSource,mobile } = this.state;
    let  user={
      Dname:name,
      Demail:Email,
      Dpass:password,
      DImg:avatarSource
    }
    var promise =new Promise((resolve,reject)=>{
      firebase.auth().createUserWithEmailAndPassword(Email, password).then((res)=>{
    
        var newPostKey = firebase.database().ref().child('Users').push().key;
        var user = firebase.auth().currentUser.uid;
          firebase.database().ref('Users/'+user).set({
            username: name,
            email: Email,
            profile_picture : avatarSource,
            userpassword:password,
            userkey:newPostKey,
            usermobile:mobile
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
              <Label>Mobile Number</Label>
              <Input value={this.state.mobile} maxLength={16} onChangeText={(mobile) => this.setState({ mobile })}  placeholder={'Enter your Mobile Number'} />
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

const alpha=/^[a-zA-Z]+$/;
const num  = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
 const emailvaild=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#26AE90',
    flex:1,
    justifyContent:'center',
    paddingLeft:7,
},
inputStyle:{
    backgroundColor:'#fff',
    marginBottom:15,
    fontSize:20,
    paddingLeft:15,
},
btnText:{
    backgroundColor:'#ECEEF1',
    paddingBottom:10,
    paddingTop:10,
    fontSize:18,
    marginTop:25,
    color:'#26AE90',
    textAlign:'center',
   fontWeight: 'bold',
},
btnTextSignUp:{
    fontSize:16,
    color:'#fff',
    marginTop:70,
    fontWeight:'bold',
    textAlign:'center',
},
error:{

    borderWidth: 3,
    borderColor: 'red',
},
});
