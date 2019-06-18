import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz_position: 1
    };
  }

  render() {
    let quizData = require("./quiz_data.json");

    return (
      <div>
        <QuizQuestion
          quiz_position={this.state.quiz_position}
          quizData={quizData}
        />
      </div>
    );
  }
}

export default Quiz;
