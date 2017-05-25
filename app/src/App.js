import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import axios from 'axios';
import Pageselect from './components/header.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {

  

  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        <div className='container'>
          <Pageselect />
        </div>
        <p className = "App-intro">
        </p>
        <div className="leftHalf">
          <h1 align="center">League Table</h1>
          <hr/>
        <div>
          {loading ? this.renderLoading() : this.renderDetails()}
        </div>
        </div>
        <div className="rightHalf">
          <h1>Social Media</h1>
        </div>
      </div>
    );
  }
}

export default App;