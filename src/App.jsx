import Game from "./components/Game/Game.jsx";
import StartPage from "./components/start-page/start-page";

function App() {
  return (
    <div className="app">
      <StartPage />
      <Game rows={20} columns={10} />
    </div>
  );
}

export default App;
