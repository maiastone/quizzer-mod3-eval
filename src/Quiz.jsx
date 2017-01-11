import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question.jsx';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
      score: [],
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

  scoreAnswer(score, index) {
    console.log(score, index)
    this.state.score[index] = score;
    this.setState({
      score: this.state.score,
    })

  }

  totalScores(e) {
    return this.state.score.reduce(function(accum, curr) {
      return accum + curr;
    }, 0)
  }

  render() {
    let score = this.totalScores();
    return (
      <div>
        <h1>{this.state.quizzes.title}</h1>

        {this.state.quizzes.questions ?
          this.state.quizzes.questions.map((question, index) => {
            return(
              <Question
                question={question}
                key={question.id}
                scoreAnswer={(score) => this.scoreAnswer(score, index)}
              />
            )
        }): <h2>Loading... </h2>}
        {score}
        <button type='submit'
          onClick={(e) => this.totalScores(e)}
        >Submit
        </button>
      </div>
    );
  }
}

module.exports = Quiz;
