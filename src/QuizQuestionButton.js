import React, { Component } from "react";

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonText) {
    this.props.clickHandler(buttonText);
  }

  render() {
    return (
      <button onClick={this.handleClick(this.props.button_text)}>
        {this.props.button_text}
      </button>
    );
  }
}

export default QuizQuestionButton;
