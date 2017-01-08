import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: null,
    }
  }

  fetchQuizzes() {
    axios.get('/quizzes')
    .then((response) => {
      this.setState({
        quizzes: response.data.quizzes
      });
    })
    .catch(function(error) {
      console.log('Error receiving quizzes')
    })
  }
  componentDidMount() {
    this.fetchQuizzes();

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Quizzer App</h2>
        </div>
      </div>
    );
  }
}

export default App;
