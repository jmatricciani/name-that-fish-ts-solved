import { Component } from "react";
import "./styles/game-board.css";
import { GameProps } from "../../types";

export class ClassGameBoard extends Component<GameProps> {
  state = {
    input: "",
  };

  render() {
    const nextFishToName = this.props.gameData.fishes[0];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(event) => {
            event.preventDefault();
            this.props.handleGameData({
              correct:
                this.state.input === nextFishToName.name
                  ? this.props.gameData.correct + 1
                  : this.props.gameData.correct,
              incorrect:
                this.state.input === nextFishToName.name
                  ? this.props.gameData.incorrect
                  : this.props.gameData.incorrect + 1,
              fishes: this.props.gameData.fishes.slice(1),
              isDone: this.props.gameData.fishes.length === 1 ? true : false,
            });
            this.setState({ input: "" });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            id="fish-guess"
            type="text"
            name="fish-guess"
            value={this.state.input}
            onChange={(event) => this.setState({ input: event.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
