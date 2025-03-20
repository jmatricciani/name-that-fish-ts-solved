import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../fishData";
import { TypeGameInterface } from "../../types";

export class ClassApp extends Component {
  state = {
    gameData: {
      fishes: initialFishes,
      correct: 0,
      incorrect: 0,
      isDone: false,
    },
  };

  handleGameInterface = (gameInterface: TypeGameInterface) => {
    this.setState({
      gameData: { ...gameInterface },
    });
  };
  render() {
    return (
      <>
        <>
          {!this.state.gameData.isDone && (
            <ClassScoreBoard {...this.state.gameData} />
          )}
          {!this.state.gameData.isDone && (
            <ClassGameBoard
              gameData={this.state.gameData}
              handleGameData={this.handleGameInterface}
            />
          )}
        </>
        {this.state.gameData.isDone && (
          <ClassFinalScore {...this.state.gameData} />
        )}
      </>
    );
  }
}
