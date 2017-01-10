import React, { Component } from 'react';

class Answers extends Component {
  render() {
    const { answer, index, id } = this.props;
    return(
      <div>
          <input
            key={index}
            type="radio"
            name={id}
          />
        {answer.title}
      </div>
    )
  }
}

export default Answers;
