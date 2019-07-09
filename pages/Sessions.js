import React, { Component } from 'react'
import {Alert,FlatList} from 'react-native';
import * as firebase from "firebase";
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail,Text } from 'native-base';
import SingleSession from '../Component/SingleSession';
import flatlistData from '../Data/FlatListData';
//import console = require('console');
import TabFooter from '../Component/TabFooter';

export default class Sessions extends Component {
    
  constructor(props){
    super(props);
   this.state={
      name:"omar"
    }
   
  }
  _renderItem = ({item}) =>(
    <SingleSession listData={item}></SingleSession>
  );
  render() {
    return (
      <Container>
      <Content>
      
        <FlatList
        data={flatlistData}
        extraData={this.state.name}
        //keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}/>
     
      </Content>
      <TabFooter></TabFooter>
      </Container>
    )
  }
}
