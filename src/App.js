import { useState, useEffect } from 'react';
import useWebSocket from './hooks/useWebSocket';
import JoinScreen from './components/JoinScreen';
import GameContainer from './components/GameContainer';
import './App.css';

export default function App() {
  const { gameState, playerId, sendMessage, connectionError } = useWebSocket("ws://localhost:8080");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  console.log('App state:', { playerId, gameState, connectionError });

  if (connectionError) {
    return <div>Failed to connect to server</div>;
  }

  if (!playerId) {
    return <JoinScreen onJoin={(name) => sendMessage('join', { name })} />;
  }

  return (
    <div className="app">
      <button className="theme-toggle" onClick={toggleTheme}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      {gameState ? (
        <GameContainer 
          gameState={gameState}
          sendMessage={sendMessage}
          playerId={playerId}
        />
      ) : (
        <div>
          <h2>Wilkommen! WWarte auf Spielstart...</h2>
          <button onClick={() => sendMessage('start', {})}>Start Game</button>         
        </div>
      )}
    </div>
  );
}
