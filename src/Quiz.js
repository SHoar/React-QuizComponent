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
    let { quiz_questions } = quizData;
    let { quiz_position } = this.state;

    return (
      <div>
        <QuizQuestion
          quiz_question={quiz_questions[quiz_position - 1]}
          quiz_position={quiz_position - 1}
        />
      </div>
    );
  }
}

export default Quiz;
