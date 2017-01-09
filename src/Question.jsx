import React, { Component } from 'react';
import Answer from './Answer.jsx';

class Question extends React.Component {


    render() {
      const { question } = this.props
      return (
        <section>
          <h2>{question.title}</h2>
          <form>
            {question.answers.map((answer, index) => {
              return(
                <Answer
                  index={index}
                  answer={answer} />
              )
            })}
          </form>
        </section>
      );
    }
  }

module.exports = Question;
