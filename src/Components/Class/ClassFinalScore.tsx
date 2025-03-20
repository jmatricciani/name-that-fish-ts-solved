import { Component } from "react";
import { TypeGameInterface } from "../../types";

export class ClassFinalScore extends Component<TypeGameInterface> {
  render() {
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{this.props.correct}</p>
          <hr />
          <p>{this.props.correct + this.props.incorrect}</p>
        </div>
      </div>
    );
  }
}
