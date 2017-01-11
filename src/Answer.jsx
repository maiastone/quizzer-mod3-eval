import React, { Component } from 'react';

class Answers extends Component {
  render() {
    
    let score = 0;

    const { answer, index, id } = this.props;
    return(
      <label>
          <input
            key={index}
            type='radio'
            name={id}
            onClick={this.scoreAnswer}
          />
        {answer.title}
      </label>
    )
  }
}

export default Answers;
