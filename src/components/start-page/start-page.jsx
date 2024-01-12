import Game from "../Game/Game.jsx";
import "./start-page.css";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  const handlePlayButtonClick = () => {
    navigate("/game");
  };

  return (
    <div className="start-page-container">
      <h1 className="title">Tetris</h1>
      <div className="game-details">
        <div className="game-description-container">
          <h2 className="description-title">Welcome to Tetris</h2>yyyv b
          <p className="game-description">
            Tetris is a classic and timeless puzzle video game that challenges
            players to arrange falling blocks of different shapes and sizes to
            create complete lines. As the blocks descend faster and the game
            progresses, players must think quickly and strategically to clear
            lines and prevent the screen from filling up. I hope you enjoy and
            get yourself on the leaderboard!!
          </p>
        </div>

        <button className="play-button" onClick={handlePlayButtonClick}>
          Play
        </button>

        <div className="leaderboard-container">
          <h2 className="leaderboard-title">Leaderboard</h2>
          <ol className="leaderboard">
            <li className="leaderboard-item">Lewis 10,000</li>
            <li className="leaderboard-item">Amy 9,000</li>
            <li className="leaderboard-item">Brunt 8,000</li>
            <li className="leaderboard-item">Oscar 7,000</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
