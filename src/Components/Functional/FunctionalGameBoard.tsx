import { GameProps } from "../../types";
import "./styles/game-board.css";

import React, { useState } from "react";

export const FunctionalGameBoard: React.FC<GameProps> = ({
  gameData,
  handleGameData,
}) => {
  const [input, setInput] = useState("");

  const nextFishToName = gameData.fishes[0];

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(event) => {
          event.preventDefault();
          handleGameData({
            correct:
              input === nextFishToName.name
                ? gameData.correct + 1
                : gameData.correct,
            incorrect:
              input === nextFishToName.name
                ? gameData.incorrect
                : gameData.incorrect + 1,
            fishes: gameData.fishes.slice(1),
            isDone: gameData.fishes.length === 1 ? true : false,
          });
          setInput("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          id="fish-guess"
          type="text"
          name="fish-guess"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
