/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {Scene, Router} from 'react-native-router-flux';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Forgetpassword from './pages/Forgetpassword';
import Settings from './pages/Settings';
import Splash from './Component/Splash';
import About from './pages/About';
import Contactus from './pages/Contactus';
import Privacy from './pages/Privacy';
import Changepassword from './pages/Changepassword';
import Notifications from './pages/Notifications';
import Locations from './pages/Locations';
import Editprofile from './pages/Editprofile';
import Sessions from './pages/Sessions';
import SingleSession from './Component/SingleSession';
import Upload from './pages/upload';
import Details from './pages/Details';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <Router>
      <Scene key="root" hideNavBar>
      <Scene key="Splash" component={Splash} title="Splash" />
      <Scene key="Login" component={Login} title="Login" />
      <Scene key="Home" component={Home} title="Home" />
      <Scene key="Register" component={Register} title="Register"/>
      <Scene key="Forgetpassword" component={Forgetpassword} title="Forgetpassword" />
      <Scene key="Settings" component={Settings} title="Settings"  />
      <Scene key="Contactus" component={Contactus} title="Contactus"  />
      <Scene key="Privacy" component={Privacy} title="Privacy"  />
      <Scene key="About" component={About} title="About"  />
      <Scene key="Changepassword" component={Changepassword} title="Changepassword"  />
      <Scene key="Notifications" component={Notifications} title="Notifications"  />
      <Scene key="Locations" component={Locations} title="Locations"  />
      <Scene key="Editprofile" component={Editprofile} title="Editprofile"  />
      <Scene key="Sessions" component={Sessions} title="Sessions"  />
      <Scene key="SingleSession" component={SingleSession} title="SingleSession"  />
      <Scene key="Upload" component={Upload} title="Upload"  />
      <Scene key="Details" component={Details} title="Details"  />
      </Scene>
    </Router>
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
