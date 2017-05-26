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
    return (
      <div className="App">
        <div className='container'>
          <Pageselect />
        </div>
      </div>
    );
  }
}

export default App;