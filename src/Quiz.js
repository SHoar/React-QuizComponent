import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz_position: 1
    };
  }

  render() {
    return (
      <div>
        <span>{quizData.quiz_questions[1].instruction_text}</span>
      </div>
    );
  }
}

export default Quiz;
