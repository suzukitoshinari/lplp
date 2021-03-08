import React, { useContext } from "react";
import { GameContext } from "./App";

const Square = ({ id }) => {
  const { squares, finished, onClick } = useContext(GameContext);
  return finished ? (
    <button className="square">{squares[id]}</button>
  ) : (
    <button className="square" onClick={() => onClick(id)}>
      {squares[id]}
    </button>
  );
};

export default Square;