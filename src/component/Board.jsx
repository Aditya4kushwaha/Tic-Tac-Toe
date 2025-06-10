import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, SetState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i of winnerLogic) {
      const [a, b, c] = i;

      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();
  const isTie = !isWinner && state.every((square) => square !== null);

  const handleClick = (index) => {
    if (state[index] !== null) return;
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    SetState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handlReset = () => {
    SetState(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="board-container">
      <h2 className="game-title">Tic Tac Toe</h2>

      {isWinner ? (
        <>
          <h3>{isWinner} won the game!</h3>
          <button onClick={handlReset}>Play Again</button>
        </>
      ) : isTie ? (
        <>
          <h3>It's a Tie!</h3>
          <button onClick={handlReset}>Play Again</button>
        </>
      ) : (
        <>
          <h3>Player {isXTurn ? "X" : "O"} please move</h3>
          <div className="board">
            {state.map((val, index) => (
              <Square
                key={index}
                value={val}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
