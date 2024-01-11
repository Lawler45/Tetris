import Board from "./components/board/board";
import StartPage from "./components/start-page/start-page";

function App() {
  return (
    <div className="app">
      <StartPage />
      <Board rows={20} columns={10} />
    </div>
  );
}

export default App;
