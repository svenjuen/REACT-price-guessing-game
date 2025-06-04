import { useState } from 'react';
import useWebSocket from './hooks/useWebSocket';
import JoinScreen from './components/JoinScreen';
import GameContainer from './components/GameContainer';
import './App.css';

export default function App() {
  const { gameState, playerId, sendMessage, connectionError } = useWebSocket("ws://localhost:8080");
  
  console.log('App state:', { playerId, gameState, connectionError });
  
  if (connectionError) {
    return <div>Failed to connect to server</div>;
  }
  
  if (!playerId) {
    return <JoinScreen onJoin={(name) => sendMessage('join', { name })} />;
  }

  return (
    <div className="app">
      {gameState ? (
        <GameContainer 
          gameState={gameState}
          sendMessage={sendMessage}
          playerId={playerId}
        />
      ) : (
        <div>
          <h2>Welcome! Waiting for game to start...</h2>
          <button onClick={() => sendMessage('start', {})}>Start Game</button>
        </div>
      )}
    </div>
  );
}