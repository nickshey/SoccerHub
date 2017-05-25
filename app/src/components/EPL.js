import React, { Component } from 'react';
import axios_functions from './axios_functions.js'
class EPL extends Component {
  render() {
    return (
      <div>
        <axios_functions url = {`http://api.football-data.org/v1/competitions/426/leagueTable`} />
      </div>
    );
  }
}

export default EPL;