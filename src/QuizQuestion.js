import React, { Component } from "react";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { quizData, quiz_position } = this.props;
    const { quiz_questions } = quizData;
    return (
      <div>
        <main>
          <section>
            <p>{quiz_questions[quiz_position - 1].instruction_text}</p>
          </section>
          <section className="buttons">
            <ul>
              {quiz_questions.map((quiz_question) => {
                return (
                  <li>{quiz_question.answer_options[quiz_position - 1]}</li>
                );
              })}
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default QuizQuestion;
