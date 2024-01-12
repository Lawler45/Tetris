import "./Game.css";
import { useNavigate } from "react-router-dom";
import { useGameOver } from "../../hooks/useGameOver";
import Tetris from "../Tetris/Tetris";
import StartPage from "../start-page/start-page";

const Game = ({ rows, columns }) => {
  const navigate = useNavigate();

  const handleQuitButtonClick = () => {
    navigate("/");
  };

  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => {
    resetGameOver();
  };
  return (
    <div className="Game">
      {gameOver ? (
        <StartPage onClick={start} />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
};

export default Game;
