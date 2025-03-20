import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { TypeGameInterface } from "../../types";
import { initialFishes } from "../../fishData";

export function FunctionalApp() {
  const [gameInterface, setGameInterface] = useState<TypeGameInterface>({
    fishes: initialFishes,
    correct: 0,
    incorrect: 0,
    isDone: false,
  });
  return (
    <>
      {!gameInterface.isDone && <FunctionalScoreBoard {...gameInterface} />}
      {!gameInterface.isDone && (
        <FunctionalGameBoard
          gameData={gameInterface}
          handleGameData={(gameInterface: TypeGameInterface) => {
            setGameInterface(gameInterface);
          }}
        />
      )}
      {gameInterface.isDone && <FunctionalFinalScore {...gameInterface} />}
    </>
  );
}
