import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      err: null,
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const babySmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    }

    axios
      .post("http://localhost:3333/smurfs", babySmurf)
      .then( resp => {
        this.setState({
          err: null,
        })
        this.props.addSmurf(resp.data)
      })
      .catch( err => {
         this.setState({
           err: err.response.data.Error
         })
      })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
        <p>{this.state.err}</p>
      </div>
    );
  }
}

export default SmurfForm;
