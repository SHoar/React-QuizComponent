import React, { Component } from "react";

class QuizQuestionButton extends Component {
  handleClick = (event) => {
    alert("You clicked me!");
  };

  render() {
    return <button onClick={this.handleClick}>{this.props.button_text}</button>;
  }
}

export default QuizQuestionButton;
