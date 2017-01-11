import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question.jsx';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
      score: 0,
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

  scoreAnswer() {
    debugger;
    this.setState({
      score: this.state.quizzes.questions.answers.score,
    })

  }


  render() {
    return (
      <div>
        <h1>{this.state.quizzes.title}</h1>

        {this.state.quizzes.questions ?
          this.state.quizzes.questions.map((question) => {
            return(
              <Question
                question={question}
                key={question.id}
                scoreAnswer={() => this.scoreAnswer.bind(this)}
              />
            )
        }): <h2>Loading... </h2>}

        <button type='submit'>Submit</button>
      </div>
    );
  }
}

module.exports = Quiz;
