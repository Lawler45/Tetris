import "./board.css";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const navigate = useNavigate();

  const handleQuitButtonClick = () => {
    navigate("/");
  };
  return (
    <div className="game-container">
      <div className="board"></div>
      <p className="score">Score: 0</p>
      <button className="quit-button" onClick={handleQuitButtonClick}>
        Quit
      </button>
    </div>
  );
};

export default Board;
