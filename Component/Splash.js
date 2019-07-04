import React, { Component } from 'react'
import {AsyncStorage,Text,Image,Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
console.disableYellowBox=true;
export default class Splash extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          Email: '',
          password: '',
        
        };
        setTimeout(()=>{
            AsyncStorage.getItem('userD', (err, result) => {
                if(result!=null)
                {
                  Actions.Home();
                }
                if(result==null){
                  Actions.Login();
                }
              });
        },1000)
      }
    
    render() {
      let screenWidth=Dimensions.get('window').width;
        return (
            <Image style={{ width:screenWidth ,height:screenWidth*500/1000 ,alignItems: 'center',justifyContent:"center",flex:1}} source={require('../Img/00.png')}></Image>
            
        );
    }
}
