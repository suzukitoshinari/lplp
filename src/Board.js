import React from "react";
import Square from "./Square";

const Board = () => {
    const renderSquare = i => <Square key={i} id={i} />;
    const renderRow = (start, end) => {
      const rowSquares = [];
      for (let i = start; i <= end; i++) {
        rowSquares.push(renderSquare(i));
      }
      return rowSquares;
    };
    return (
      <div>
        <div className="board-row">{renderRow(0, 2)}</div>
        <div className="board-row">{renderRow(3, 5)}</div>
        <div className="board-row">{renderRow(6, 8)}</div>
      </div>
    );
  };
  
  export default Board;
  