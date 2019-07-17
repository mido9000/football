import React, { Component } from 'react';
import {Alert,FlatList} from 'react-native';
import { Container, Content, Tab, Tabs } from 'native-base';
import TabFooter from '../Component/TabFooter';
import * as firebase from "firebase";
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import  flatlistData from '../Data/FlatListData'

var tabList;
export default class History extends Component {
  state={
    name:"",
    mygames:[],
    joinedgames:[],
    user:{}
  }

   componentWillMount(){
     this.callFirebase()
     this.callFirebase2()
    
    } 

  constructor(props) {
    super(props);

  }
  callFirebase(){
    var currentUser =firebase.auth().currentUser.uid;
    firebase.database().ref('Session').on('value',(childSnapshot)=>{
      var mysec=[];
       var cnt=0;
      childSnapshot.forEach((doc)=>{
        
        var userid=doc.toJSON().userId;
          firebase.database().ref("Users/"+userid).once('value').then((snapshot)=>{
            this.setState({
              user:snapshot.toJSON()
            })
          })
          .then(()=>{

            
            if(userid==currentUser){
             
              //cnt++;
              //alert(cnt)
              mysec.push({
                counter:doc.toJSON().counter,
                date:doc.toJSON().date,
                description:doc.toJSON().description,
                location:doc.toJSON().location,
                phone:doc.toJSON().phone,
                pic:doc.toJSON().picurl,
                price:doc.toJSON().price,
                time:doc.toJSON().time,
                userId:doc.toJSON().userId,
                userInfo:this.state.user
                
                })
              }
            }) 
          .then(()=>{
            this.setState({
              mygames:mysec
            })
          })
  
            
       });
       
      });


  }
  callFirebase2(){
    var mysec =[];
    
    var currentUser =firebase.auth().currentUser.uid;
    firebase.database().ref("Session").on("value",(snapshot)=>{
      snapshot.forEach((doc)=>{
          //alert(JSON.stringify(doc))
          var key = doc.key;
          firebase.database().ref("Session/"+key+"/players").once('value').then((snapshot)=>{
            //alert(JSON.stringify(snapshot))
            var countPlayers=0; 
            snapshot.forEach((players)=>{
              var player = players.toJSON()
              //alert(JSON.stringify(player) )
              countPlayers++;
              if(player==currentUser){
                //alert(countPlayers)
                
                mysec.push({
                  counter:doc.toJSON().counter,
                  date:doc.toJSON().date,
                  description:doc.toJSON().description,
                  location:doc.toJSON().location,
                  phone:doc.toJSON().phone,
                  pic:doc.toJSON().picurl,
                  price:doc.toJSON().price,
                  time:doc.toJSON().time,
                  userId:doc.toJSON().userId,
                  sessionId:doc.key,
                  currentUser:currentUser,
                  playerId:countPlayers

                })
                //alert(JSON.stringify(mysec) )
                  this.setState({
                      joinedgames:mysec
                  })
                  
              }
          })
          })
      })
      //alert(this.state.joinedgames)
    })
    
    

  }
  _renderItem = ({item}) =>(
    <Tab1 myGames={item}></Tab1>
  );
  _renderItem2 = ({item}) =>(
    <Tab2 joinedGames={item}></Tab2>
  )

   render() {
   // await this.componentDidMount()
   //   await this.callFirebase()
     return (
      <Container>
        {/* <Header hasTabs /> */}
       
        <Tabs>
          <Tab heading="Sessions history">
            <FlatList
            data={this.state.mygames}
            extraData={this.state.name}
            //keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}/>
          </Tab>
          <Tab heading="Games history">
          <FlatList
            data={this.state.joinedgames}
            extraData={this.state.name}
            //keyExtractor={this._keyExtractor}
            renderItem={this._renderItem2}/>
          </Tab>
        </Tabs>
        <TabFooter></TabFooter>
      </Container>
    );
  }
}



