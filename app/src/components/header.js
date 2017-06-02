import React, { Component } from 'react';
import logo from './logo.png';
import EPL from './EPL.js';
import Bundesliga from './Bundesliga.js';
import LaLiga from './LaLiga.js';
import SerieA from './SerieA.js';
import Ligue1 from './Ligue1.js';
import Welcome from './welcome.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class Pageselect extends React.Component {
 
  render() {
    
    return (
      <Router>
        <div className = 'top'>
          <MuiThemeProvider>
            <div>
              <AppBar  style={{
                  width: '100%',
                  margin: '0 auto',
                  backgroundColor: "lightblue",
                  textAlign: "right",
                  textColor: "white",
                }}
                  title= {<div>
                  <Link to="EPL"><FlatButton style = {{color: "white"}}label ="EPL"  /></Link>
                  <Link to="Bundesliga"><FlatButton style = {{color: "white"}} label ="Bundesliga"  /></Link>
                  <Link to="Serie A"><FlatButton style = {{color: "white"}}label ="Serie A"  /></Link>
                  <Link to="La Liga"><FlatButton style = {{color: "white"}}label ="La Liga"  /></Link>
                  <Link to="Ligue 1"><FlatButton style = {{color: "white"}} label ="Ligue 1"  /></Link>
                  </div>}
                  iconElementLeft= {<Link to="/"><img src ={logo} alt = '' className = 'logo_img'/></Link>}
                />
             </div>
        </MuiThemeProvider>
      <Route exact path="/EPL" component={EPL}/> 
      <Route exact path="/Bundesliga" component={Bundesliga}/> 
      <Route exact path="/Serie A" component={SerieA}/> 
      <Route exact path="/La Liga" component={LaLiga}/> 
      <Route exact path="/Ligue 1" component={Ligue1}/> 
      <Route exact path="/" component={Welcome}/> 
   </div>
</Router>
    )
  }
}


export default Pageselect;