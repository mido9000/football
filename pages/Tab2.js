import React, { Component } from 'react';
import * as firebase from "firebase";
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button,View } from 'native-base';
export default class Tab2 extends Component {
  state={
    counter:0
  }
  componentWillMount(){
    this.setState({
      counter:this.props.joinedGames.counter
    })
  }
  cancelGame(){
    
    firebase.database().ref("Session/"+this.props.joinedGames.sessionId+"/players").once('value').then((snapshot)=>{
      snapshot.forEach((doc)=>{
        var player = doc.toJSON()
        
        if(player==this.props.joinedGames.currentUser){
          firebase.database().ref("Session/"+this.props.joinedGames.sessionId+"/players/"
          +this.props.joinedGames.playerId).remove()
        }
      })  
    }).then(()=>{
      this.setState({
        counter:this.state.counter-1,
        //i:1
      })
      firebase.database().ref("Session/"+this.props.joinedGames.sessionId).update({
        counter:this.state.counter
      })
    })
  }
  render() {
    return (
      <View>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{uri:this.props.joinedGames.pic}} />
              </Left>
              <Body>
                <Text>{this.props.joinedGames.time} / {this.props.joinedGames.date}</Text>
                <Text note numberOfLines={1}>{this.props.joinedGames.location} - {this.props.joinedGames.description}</Text>
              </Body>
              <Right>
                <Button transparent onPress={()=>{this.cancelGame()}}>
                  <Text style={{color:'red'}}>Cancel</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
      </View>
    );
  }
}
