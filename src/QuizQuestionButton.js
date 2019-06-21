import React, { Component } from "react";

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonText) {
    this.props.clickHandler(buttonText);
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        {this.props.button_text}
      </button>
    );
  }
}

export default QuizQuestionButton;
