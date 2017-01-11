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
        quizzes: response.data.quizzes[0]
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
          this.state.quizzes.questions.map((question) => {
            return(
              <Question question={question} key={question.id} />
            )
        }): <h2>Loading... </h2>}

        <button type='submit'>Submit</button>
      </div>
    );
  }
}

module.exports = Quiz;
