import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import axios from 'axios';
import Pageselect from './components/header.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <Pageselect />
          <MuiThemeProvider>
              <AppBar  style={{
                  width: '100%',
                  margin: '0 auto',
                  backgroundColor: "lightblue",
                  textAlign: "center",
                  textColor: "white",

                }}
                  title= {<div>Taylor Rohrich and Nojan Sheybani. Launch 2017.</div>} 
                  iconElementLeft= {<div></div>}
                />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
export default App;