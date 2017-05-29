import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import welcomeimg from './example.jpg'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <MuiThemeProvider>
          <div>
          <AppBar style={{
      width: '100%',
      margin: '0 auto',
      backgroundColor: "lightgrey",
      textAlign: "Left",
      textColor: "white",
    }} iconElementLeft = {<div></div>} title = {<div>Welcome to SoccerHub</div>}/>
    
    </div>
    </MuiThemeProvider>
        <div className = "welcome-sub"> 
            Access all the latest Soccer updates at your fingertips. <br/> Click a League above to begin.
        </div>
<img className = "exampleimg" src = {welcomeimg} />
      </div>
    );
  }
}

export default Welcome;