import "./Tetris.css";
import Board from "../Board/Board.jsx";

import useBoard  from "../../hooks/useBoard";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [board, setBoard] = useBoard({ rows, columns });
  return <Board board={board} />;
};

export default Tetris;
