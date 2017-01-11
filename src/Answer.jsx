import React, { Component } from 'react';

class Answers extends Component {
  render() {
    const { answer, index, id, score, scoreAnswer } = this.props;


    return(
      <label>
          <input
            key={index}
            type='radio'
            name={id}
            value={score}
            onChange={() => this.props.scoreAnswer(score)}
          />
        {answer.title}
      </label>
    )
  }
}

export default Answers;
