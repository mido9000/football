import React, { Component } from 'react';
import { StyleSheet, Text, Alert, Image } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Icon, View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import * as firebase from "firebase";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      password: '',
      confirmPassword: '',
      name: ''
    };
  }
  onRegister() {
    const { name, Email, password, confirmPassword } = this.state;
    firebase.auth().createUserWithEmailAndPassword(Email, password).then(()=>{
      Alert.alert("dataset");
    })
    .catch(function(error) {
      Alert.alert("error"+error);
    });
    Alert.alert('userData', `${name}+${Email} + ${password} ${confirmPassword}`);
    console.log(name);
  }
  render() {
    return (
      <Container style={{ padding: 5 }}>
        <Content>
          <Form style={{ flex: 1 }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 100, height: 100, alignItems: 'center', }} source={require('../Img/1.png')}></Image>
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
