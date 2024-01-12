import React from "react";
import "./GameStats.css";

const GameStats = ({ gameStats }) => {
  console.log(gameStats, "gamestats");
  const linesToLevel = gameStats.linesPerLevel - gameStats.linesCompleted;

  return (
    <ul className="GameStats GameStats__right">
      <li>Level</li>
      <li className="value">{gameStats.level}</li>
      <li>Lines to level</li>
      <li className="value">{linesToLevel}</li>
      <li>Points</li>
      <li className="value">{gameStats.points}</li>
    </ul>
  );
};

export default React.memo(GameStats);
