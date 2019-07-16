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
    user:{}
  }

  async componentWillMount(){
    await this.callFirebase()
    
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
        
        //var userInfo;
         // alert(userid)
          firebase.database().ref("Users/"+userid).once('value').then((snapshot)=>{
            this.setState({
              user:snapshot.toJSON()
            })
          })
          .then(()=>{

            
            if(userid==currentUser){
             
              cnt++;
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
          // .then(()=>{
          //   alert(JSON.stringify(this.state.mygames));
          // })
             
             //alert(JSON.stringify(this.state.session) )
  
            
       });
       
      });


  }
  _renderItem = ({item}) =>(
    <Tab1 myGames={item}></Tab1>
  );

   render() {
   // await this.componentDidMount()
   //   await this.callFirebase()
     return (
      <Container>
        {/* <Header hasTabs /> */}
       
        <Tabs>
          <Tab heading="Sessions history">
            {/* <Tab1 /> */}
            <FlatList
            data={this.state.mygames}
            extraData={this.state.name}
            //keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}/>
          </Tab>
          <Tab heading="Games history">
            <Tab2 />
          </Tab>
        </Tabs>
        <TabFooter></TabFooter>
      </Container>
    );
  }
}



