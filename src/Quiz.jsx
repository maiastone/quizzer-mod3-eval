import React, { Component } from 'react';
import App from './App.js';
import Question from './Question.jsx';
import axios from 'axios';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: null,
    }
  };

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

  // {this.props.quizzes.map(quiz => {
  //   return (
  //     <div>
  //       <h2>{quiz.title}</h2>
  //       <Question
  //         questions={quiz.questions} />
  //     </div>
  //   )}
  // )}


  render() {
    return (
      <div>
        <Question
          quizzes={this.state.quizzes} />
      </div>
    );
  }

};

module.exports = Quiz;
