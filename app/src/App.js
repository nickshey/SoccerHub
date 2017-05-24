import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import axios from 'axios';

class App extends Component {

    state = {
    details: [],
    loading: true,
    error: null
  }

  componentDidMount() {
    // Remove the 'www.' to cause a CORS error (and see the error state)

    axios.get(`http://api.football-data.org/v1/teams/65/players`)
      .then(res => {
        // Transform the raw data by extracting the nested posts
        let details = res.data

        // Update state to trigger a re-render.
        // Clear any errors, and turn off the loading indiciator.
        this.setState({
          details,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        // Something went wrong. Save the error in state and re-render.
        this.setState({
          loading: false,
          error: err
        });
      });
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return (
      <div>
        Something went wrong: {this.state.error.message}
      </div>
    );
  }

  renderDetails() {
    // Using destructuring to extract the 'error' and 'posts'
    // keys from state. This saves having to write "this.state.X" everwhere.
    const { error, details } = this.state;

    if(error) {
      return this.renderError();
    }

    return (
      <ul>

        {this.state.details.players.map((players) =>
          <li key={players.name}>
            <p> Name: {players.name} </p>
            <p> Position: {players.position}</p>
            <hr/>
          </li>
        )}
      </ul>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className = "App-intro">
        </p>
        <div className="leftHalf">

          <h1>League Table</h1>

          <hr/>
        <div>
          {loading ? this.renderLoading() : this.renderDetails()}
        </div>
        </div>
        <div className="rightHalf">
        </div>
      </div>
    );
  }
}

export default App;
