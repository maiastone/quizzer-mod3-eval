import React, { Component } from 'react';
import Answer from './Answer.jsx';

class Question extends Component {
  render() {
    const { question } = this.props;
    return(
      <main key={question.id}>
        <h2>{question.title}</h2>
        <section>
          {question.answers.map((answer, index) => {
            return(
              <Answer
                key={index}
                id={question.id}
                answer={answer}
                score={answer.score}
                scoreAnswer={this.props.scoreAnswer}
              />
            )
          })}
        </section>
      </main>
    );
  }
}

module.exports = Question;
