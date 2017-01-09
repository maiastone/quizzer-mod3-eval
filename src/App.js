import React, { Component } from 'react';
import Quiz from './Quiz.jsx';

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
          <h2>Quizzer App</h2>
          <Quiz
            quizzes={this.state.quizzes} />
      </div>
    );
  }
}

export default App;
