import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("quiz_question props", this.props);
    const { quiz_questions } = this.props;
    return (
      <div>
        <main>
          <section>
            <p>{this.props.quiz_question.instruction_text}</p>
          </section>
          <section className="buttons">
            <ul>
              <QuizQuestionButton
                button_text={this.props.quiz_question.answer_options[0]}
              />
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default QuizQuestion;
