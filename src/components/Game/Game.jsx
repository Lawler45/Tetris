import "./Game.css";
import { useNavigate } from "react-router-dom";
import { useGameOver } from "../../hooks/useGameOver";
import Tetris from "../Tetris/Tetris";

const Game = ({ rows, columns }) => {
  const navigate = useNavigate();

  const handleQuitButtonClick = () => {
    navigate("/");
  };

  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => {
    resetGameOver();
    console.log(`start gameOver is ${gameOver}`);
  };
  return (
    <div className="game-container">
      <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      <button className="quit-button" onClick={handleQuitButtonClick}>
        Quit
      </button>
      <button className="start-button" onClick={start}>
        Start
      </button>
    </div>
  );
};

export default Game;
