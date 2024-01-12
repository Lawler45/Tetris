import "./Tetris.css"
import Board from "../Board/Board.jsx"
import {useBoard} from "../../hooks/useBoard.jsx"


const Tetris = ({ rows, columns, setGameOver }) => {

  return (
    <Board />
  );
};

export default Tetris;
