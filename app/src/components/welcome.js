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
import La_liga_logo from './La_Liga_logo.png';
import Bundesliga_logo from './Bundesliga_logo.png';
import EPL_logo from './EPL_logo.png';
import Ligue_1_logo from './Ligue_1_logo.png';
import Serie_A_logo from './Serie_A_logo.png';
import Sampler from './sampler.png';
import {FadeInLeft} from 'animate-components';

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
        </div>
        <FadeInLeft duration='4s' timingFunction='ease-in' as='img'>
            <img src = {Sampler}/>
        </FadeInLeft>
        <MuiThemeProvider>
          <div>
          <AppBar style={{
      width: '100%',
      margin: '0 auto',
      backgroundColor: "lightblue",
      textAlign: "Center",
      textColor: "white",
    }} iconElementLeft = {<div></div>} title = {<div>Access all the latest Soccer updates at your fingertips.</div>}/>
    <AppBar style={{
      width: '100%',
      margin: '0 auto',
      backgroundColor: "lightgrey",
      textAlign: "Center",
      textColor: "white",
    }} iconElementLeft = {<div></div>} title = {<div>Click a league below to begin.</div>}/>
    
    </div>
    </MuiThemeProvider>
        <div className = "welcomeimages">
<Link to="EPL"><img className = "welcomeimages" src = {EPL_logo} /></Link>
<Link to="Bundesliga"><img className = "welcomeimages" src = {Bundesliga_logo} /></Link>
<Link to="Serie A"><img className = "welcomeimages" src = {Serie_A_logo} /></Link>
<br/>
<Link to="/La%20Liga" ><img className = "welcomeimages" src = {La_liga_logo} /></Link>
<Link to="Ligue 1"><img className = "welcomeimages" src = {Ligue_1_logo} /></Link>

</div>
      </div>
    );
  }
}

export default Welcome;