import { Component } from "react";
import "./styles/score-board.css";
import { TypeGameInterface } from "../../types";

export class ClassScoreBoard extends Component<TypeGameInterface> {
  render() {
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {this.props.incorrect}</div>
        <div id="choices-left">
          {this.props.fishes.map((answer) => (
            <div key={answer.name} className="choice">
              {answer.name}
            </div>
          ))}
        </div>
        <div>Correct ✅: {this.props.correct}</div>
      </div>
    );
  }
}
