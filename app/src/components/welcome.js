import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import welcomeimg from './example.jpg'
class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        Welcome To SoccerHub!
        <div className = "welcome-sub"> 
            Access all the latest Soccer updates at your fingertips. <br/> Click a League above to begin.
        </div>
<img className = "exampleimg" src = {welcomeimg} />
      </div>
    );
  }
}

export default Welcome;