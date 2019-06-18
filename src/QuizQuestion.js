import React, { Component } from "react";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz_position: 1
    };
  }

  render() {
    return <div>Quiz</div>;
  }
}

export default QuizQuestion;
