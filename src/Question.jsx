import React, { Component } from 'react';
import Answer from './Answer.jsx';

class Question extends Component {
  render() {
    const { question } = this.props;
    return(
      <section key={question.id}>
        <h2>{question.title}</h2>
        <main>
          {question.answers.map((answer, index) => {
            return(
              <Answer
                key={index}
                id={question.id}
                answer={answer}
              />
            )
          })}
        </main>
      </section>
    );
  }
}

module.exports = Question;
