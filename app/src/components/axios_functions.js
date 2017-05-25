import React, { Component } from 'react';
import axios from 'axios';
class axios_functions extends Component {

    state = {
    details: [],
    loading: true,
    error: null,
  }

  componentDidMount() {
    // Remove the 'www.' to cause a CORS error (and see the error state)

    axios.get(this.props.url)
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
        {this.state.details.standing.map((standing) =>
          <li key={standing.teamName}>
            <p> Name: {standing.teamName} </p>
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
        <div className='container'>
          
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


export default axios_functions;