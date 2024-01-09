import "./board.css"

const Board = () => {
  return (
    <div className="game-container">
      <div className="board"></div>
      <p className="score">Score: 0</p>
      <button className="quit-button">Quit</button>
    </div>
  );
};

export default Board;
