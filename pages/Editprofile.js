import React, { Component } from 'react';
import { StyleSheet, Text, Alert, Image } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Icon, View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import * as firebase from "firebase";
import {AsyncStorage} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
import ImagePicker from 'react-native-image-picker';
const options = {
title: 'Select Avatar',
takePhotoButtonTitle:'take photo with camera',
chooseFromLibraryButtonTitle:'Choose Photo from Library',  
};
const uploadImage = (uri, mime = 'img/jpg') => {

  return new Promise((resolve, reject) => {

    const uploadUri = uri;
    const sessionId = new Date().getTime();
    let uploadBlob = null;
    const imageRef = storage.ref('images').child(`${sessionId}.jpg`);
    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` });
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        resolve(url)

      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default class Editprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mobile:'',
      i: 1,
      avatarSource:require('../Img/15.png')
    };
    var user = firebase.auth().currentUser.uid;
    var ref=firebase.database().ref('Users/'+user);
    ref.child("username").once('value').then((snapshot)=>{
      if (snapshot.val() !=null){
        this.setState({
          name:snapshot.toJSON()
        }) 
      resolve(name);}else{reject("user")}});
      ref.child("usermobile").once('value').then((snapshot)=>{
        if (snapshot.val() !=null){
          this.setState({
            mobile:snapshot.toJSON()
          }) 
        resolve(mobile);}else{reject("user")}});

  }
  update() {
    this.setState({ i: 2 })
    const {name,mobile} = this.state;
    var user = firebase.auth().currentUser.uid;
    var ref=firebase.database().ref('Users/'+user);
    ref.child("username").set(name).then((snapshot)=>{
      if (snapshot.val() !=null){
        this.setState({
          name:snapshot.toJSON()
        }) 
        resolve(name);}else{reject("user")} });

        ref.child("usermobile").set(mobile).then((snapshot)=>{
          if (snapshot.val() !=null){
            this.setState({
              mobile:snapshot.toJSON()
            }) 
            resolve(mobile);}else{reject("user")} });
            
      Actions.Home();
  }
  pickerImg(){
    ImagePicker.showImagePicker(options, (response) => {
      this.setState({ avatarSource: '' })
      if (response.didCancel) {

      } else if (response.error) {

      } else if (response.customButtons) {
      } else {
        uploadImage(response.uri)
          .then(url => this.setState({ avatarSource: url }))
          .catch(error => console.log(error))
      }
    });
  }
  uploadImage() {

    if (this.state.i == 1) {
      return <Image  style={{ width: 100, height: 100, alignItems: 'center',borderRadius:50 }} source={this.state.avatarSource}></Image>
    }
    else if (this.state.i == 2) {
      return <Image  style={{ width: 100, height: 100, alignItems: 'center',borderRadius:50 }} source={{ uri: this.state.avatarSource }}></Image>
    }
  }
  render() {
    return (
      <Container style={{ padding: 5 }}>
        <Content>
          <Form style={{ flex: 1 }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
            {this.uploadImage()}
              {/* <Image style={{ width: 100, height: 100, alignItems: 'center',borderRadius:50 }} source={this.state.avatarSource}></Image> */}
              <Icon style={{color:'#F58524'}} name='edit' type='AntDesign'onPress={()=>{this.pickerImg()}} />
            </View>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input value={this.state.name} onChangeText={(name) => this.setState({ name })} placeholder={'Enter Your Name'} />
            </Item>
            <Item stackedLabel last>
              <Label>Phone Number</Label>
              <Input value={this.state.mobile} maxLength={16} onChangeText={(mobile) => this.setState({ mobile })}  placeholder={'Enter Your Phone'} />
            </Item>
            <Button style={{ marginTop: 20, borderRadius: 5, height: 60 }} danger block onPress={() => { this.update() }}><Text style={{ color: 'white', fontSize: 16, textAlign: 'right', fontWeight: 'bold' }}>Update</Text></Button>
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
