import React from "react";
import "./styles/final-score.css";
import { TypeGameInterface } from "./FunctionalApp";

export const FunctionalFinalScore: React.FC<TypeGameInterface> = (gameData) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{gameData.correct}</p>
      <hr />
      <p>{gameData.correct + gameData.incorrect}</p>
    </div>
  </div>
);
