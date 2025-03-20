import React from "react";
import "./styles/score-board.css";
import { TypeGameInterface } from "../../types";
//  Where the score is presented

export const FunctionalScoreBoard: React.FC<TypeGameInterface> = (gameData) => {
  const answersLeft = gameData.fishes.map((fish) => fish.name);
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {gameData.incorrect}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {gameData.correct}</div>
    </div>
  );
};
