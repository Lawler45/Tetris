import "./Tetris.css";
import Board from "../Board/Board.jsx";
import useBoard from "../../hooks/useBoard";
import GameStats from "../GameStats/GameStats.jsx";
import { useGameStats } from "../../hooks/useGameStats.jsx";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [board, setBoard] = useBoard({ rows, columns });

  return (
    <div className="Tetris">
      <Board board={board} />;
      <GameStats gameStats={gameStats} />
    </div>
  );
};

export default Tetris;
