import React, { Component } from 'react';
import logo from './logo.png';
import EPL from './EPL.js';
import Bundesliga from './Bundesliga.js';
import LaLiga from './LaLiga.js';
import SerieA from './SerieA.js';
import Ligue1 from './Ligue1.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Pageselect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'EPL',
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang,
      }
    });
  }
  
  render() {
    var languages = ['EPL', 'Bundesliga', 'Serie A', 'La Liga', 'Ligue 1'];
    
    return (
      <Router>
      <div className = 'top'>
        {console.log(this.state.page)}
         
        <ul className='languages'>
          <img src ={logo} alt = '' className = 'logo_img'/>
          {languages.map(function (lang) {
            return (
              
              <li className = "languages"
                style={lang === this.state.selectedLanguage ? {color: '#6699ff'} : null}
                onClick={this.updateLanguage.bind(null, lang)}
                key={lang}><Link to={lang}>
                  {lang}
                 </Link> 
              </li>
            )
          }, this)}
        </ul>
         <hr/>
      <Route exact path="/EPL" component={EPL}/> 
      <Route exact path="/Bundesliga" component={Bundesliga}/> 
      <Route exact path="/Serie A" component={SerieA}/> 
      <Route exact path="/La Liga" component={LaLiga}/> 
      <Route exact path="/Ligue 1" component={Ligue1}/> 
      </div>
      </Router>
    )
  }
}


export default Pageselect;