import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf'
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount(){
    axios
      .get("http://localhost:3333/smurfs")
      .then( resolve => {
        this.setState({smurfs: resolve.data})
      })
      .catch( err => {
        console.log("Error:", err);
      })
  }

  birthSmurf = (items) => {
    this.setState({
      smurfs: items
    })
  }

  render() {
    return (
      <div className="App">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/smurf-form">New Smurf</NavLink>

        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} /> } />
        <Route exact path="/smurf-form" render={props => <SmurfForm {...props} addSmurf={this.birthSmurf} /> } />
        <Route exact path="/smurf/:id" render={ (props) => <Smurf {...props} smurfs={this.state.smurfs} /> } />

      </div>
    );
  }
}

export default App;
