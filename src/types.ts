// If you have any types that are SHARED BY MANY COMPONENTS,put them here

export type Fish = {
  name: string;
  url: string;
};

export interface GameProps {
  gameData: TypeGameInterface;
  handleGameData: (gameInterface: TypeGameInterface) => void;
}

export type TypeGameInterface = {
  fishes: Fish[];
  correct: number;
  incorrect: number;
  isDone: boolean;
};
