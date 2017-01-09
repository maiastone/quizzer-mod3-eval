import React, { Component } from 'react';
import App from './App.js';
import Question from './Question.jsx';

class Quiz extends Component {
  constructor() {
    super();
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
        <Question />
      </div>
    );
  }

};

module.exports = Quiz;
