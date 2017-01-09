import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question.jsx';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
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

  render() {
    return (
      <div>
        <h1>{this.state.quizzes.title}</h1>
          {this.state.quizzes.questions ?
            this.state.quizzes.questions.map(question => {
            return (
              <Question
                question={question}
              />
            )
          }) : <h3>Loading..</h3>
        }
      </div>
    );
  }

};

module.exports = Quiz;
