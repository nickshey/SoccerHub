import React, { Component } from 'react';
import axios from 'axios';
import { Timeline } from 'react-twitter-widgets'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import ReactTooltip from 'react-tooltip'

class EPL extends Component {

    state = {
    details: [],
    loading: true,
    error: null,
  }

  componentDidMount() {
    axios.get("http://api.football-data.org/v1/competitions/426/leagueTable", { 
          headers: { "X-Auth-Token" : "d552225d25d546c58e79bd0d09eedb5e"}
        })
          .then(res => {
               let details = res.data
                this.setState({
                  details,
                  loading: false,
                  error: null
                });
      })
          .catch(err => {
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
    const { error, details } = this.state;
    if(error) {
      return this.renderError();
    }

    return (
      <div>
        <ReactTooltip place="bottom"/>
        <tr> 
          <th data-tip="Position">#</th> 
          <th data-tip="Team">Team</th>
          <th data-tip="Matches Played">MP</th>
          <th data-tip="Wins">W</th>
          <th data-tip="Draws">D</th>
          <th data-tip="Losses">L</th>
          <th data-tip="Goals For">GF</th>
          <th data-tip="Goals Against">GA</th>
          <th data-tip="Goal Difference">GD</th>
          <th data-tip="Points">PTS</th>
        </tr>
        {this.state.details.standing.map((standing) =>
          <tr key = {standing.teamName}>
            <td>{standing.position}</td>
            <td><img className="crests" src = {standing.crestURI}></img> {standing.teamName}</td>
            <td>{standing.playedGames}</td>
            <td>{standing.wins}</td>
            <td>{standing.draws}</td>
            <td>{standing.losses}</td>
            <td>{standing.goals}</td>
            <td>{standing.goalsAgainst}</td>
            <td>{standing.goalDifference}</td>
            <td>{standing.points}</td>
          </tr>
        )}
      </div>
    );
  }


  render() {
    const { loading } = this.state;
    return (
      <div>
        <div >
          <MuiThemeProvider>
                <AppBar style={{
                    width: '100%',
                    margin: '0 auto',
                    backgroundColor: "lightgrey",
                    textAlign: "Left",
                    textColor: "white", }} 
                    iconElementLeft = {<div></div>} 
                    title = {"EPL League Table"}
                  />
          </MuiThemeProvider>
        </div>
        <p className = "App-intro"></p>
        <div className="leftHalf">
          {loading ? this.renderLoading() : this.renderDetails()}
        </div>
        <div className="rightHalf">
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'premierleague'
              }}
              options={{
                username: 'premierleague',
                height: '770',
                quantity: '1'
              }}
        />
        </div>
        </div>
    );
  }
}


export default EPL;